// import filesystem and express server
const fs = require('fs');
const express = require('express');

// import react and react-dom for server
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// import redux
const {createStore, combineReducers} = require('redux');
const Provider = require('react-redux').Provider;

// import react-router and history creator
const createHistory = require('history').createMemoryHistory;
const StaticRouter = require('react-router').StaticRouter;
const routerReducer = require('react-router-redux').routerReducer;

// import config
const {
    port,
    caching,
    cachingHours
} = require('./config');

// initiate the cache
let cache = {};

// require your app
const App = require('./dist/app.js');

// require your reducers
const reducers = require('./dist/reducers.js').default;

// create express server
const server = express();
// include generated index.html file to serve
const template = fs.readFileSync(__dirname + '/dist/index.html', 'utf-8');

// defined public route for react bundle
server.use('/public', express.static(__dirname + '/dist/public'));

// serve all other routes other than /public
server.get('*', function (req, res) {

    // check if we can get the response from cache
    const today = new Date();
    if(caching && cache[req.path] && (today.getTime() - cache[req.path].time) < (1000*60*60*cachingHours)){
        res.send(cache[req.path].response);
        return;
    }

    // create redux store with router
    const store = createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        })
    );

    // create history in memory and push requested path
    const history = createHistory();
    history.push(req.path, {});

    // create predefined state object with router location prefilled
    const preloadedState = {
        router: {
            location: history.location
        }
    };

    // render the react app to string
    // Add redux Provider and Router
    let reactContent = 
        ReactDOMServer.renderToString(
            React.createElement(Provider, {store: store},
                React.createElement(StaticRouter, {location: req.url, context: {}},
                    React.createElement(App, {}, null)
                )
            )
        );
    // wrap app in container
    reactContent = '<div id="root">' + reactContent + '</div>';
    // add predefined state to output
    reactContent += "<script>window.__PRELOADED_STATE__ = " + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + "</script>";

    // replace react app in index.html template
    let final = template.replace('<div id="root"></div>', reactContent);

    // fill cache
    if(caching){
        cache[req.path] = {
            time: today.getTime(),
            response: final
        };
    }

    // send response html page with prerendered react
    res.send(final);
});

// run server on port 3000
server.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});