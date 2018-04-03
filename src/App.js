// Import react
import React from 'react';
import { hot } from 'react-hot-loader';
import {Switch, Link} from 'react-router-dom';

import Header from './components/widgets/Header';

// Import routes
import { routes, RouteWithSubRoutes } from './Routes';

// Defined root app
// WARNING: Do not connect this component to redux.
// otherwise the router will not work
export class App extends React.Component{
    render(){
        // Render routes
        return <div>
            <Header />
            <Switch>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
        </div>;
    }
}

export default hot(module)(App);

module.exports = {
    App,
    routes
};