import React from 'react';
import {Route} from 'react-router-dom';
import fetch from 'node-fetch';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NoMatch from './components/pages/404';

import {homeSetInitialData} from './actions/home';

export const routes = [{
    path: '/',
    exact: true,
    component: Home,
    routes: undefined,
    getLoadDataAction: (match) => {
        return homeSetInitialData();
    }
},{
    path: '/about',
    exact: true,
    component: About,
    routes: undefined
},{
    path: '*',
    component: NoMatch
}];

export const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
        // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);