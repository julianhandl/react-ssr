import React from 'react';
import {Route} from 'react-router-dom';
import fetch from 'node-fetch';

import HomeContainer from './components/containers/homeContainer';
import About from './components/pages/About';
import NoMatch from './components/pages/404';

import {fetchInit as homeFetchInit} from './actions/home';

export const routes = [{
    path: '/',
    exact: true,
    component: HomeContainer,
    title: 'Home',
    navigation: true,
    routes: undefined,
    getLoadDataAction: (match) => {
        return homeFetchInit();
    }
},{
    path: '/about',
    exact: true,
    component: About,
    title: 'About',
    navigation: true,
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