// Import React and ReactDOM for the browser
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/root-reducer';
import thunk from 'redux-thunk';

// Import Router and history
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any,
    __PRELOADED_STATE__: any
  }
}

export default function createEntry(App: any, dev = false){
    // create a browser history
    const history = createHistory();
    const middleware = routerMiddleware(history);
    // setup redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // get predefined state from server
    const preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;

    // create redux store with router, preloaded state and dev tools
    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                middleware,
                thunk
            )
        ),
    )

    // hydrate (render) the already rendered app from the server
    let render = ReactDOM.hydrate;
    if(dev) render = ReactDOM.render;
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App location={store.getState().router.location} />
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );
}