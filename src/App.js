// Import react
import React from 'react';
import { hot } from 'react-hot-loader';
import {Route, Switch, Link} from 'react-router-dom';

// Import main pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import NoMatch from './components/pages/404';

// Defined root app
// WARNING: Do not connect this component to redux.
// otherwise the router will not work
class App extends React.Component{
    render(){
        // Render routes
        return <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
        </Switch>;
    }
}

export default hot(module)(App);

module.exports = App;