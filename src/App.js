// Import react
import React from 'react';
import {Switch, Link} from 'react-router-dom';
import Header from './components/widgets/Header';
import CookiePolicy from './components/widgets/CookiePolicy';
import {Helmet} from "react-helmet";

// Import routes
import { routes, RouteWithSubRoutes } from './Routes';

// Styles
import './global.scss';

// Defined root app
// WARNING: Do not connect this component to redux.
// otherwise the router will not work
class App extends React.Component{
    render(){
        // Render routes
        return <div>
            <Helmet>
                <meta charset="UTF-8" />
                <title>React Test App</title>
                <meta name="description" content="React Test App" />
            </Helmet>
            <Header />
            <Switch>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
            <CookiePolicy />
        </div>;
    }
}

export {
    App,
    routes
};