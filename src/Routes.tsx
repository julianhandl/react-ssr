import React from 'react';
import {frontendUrls} from "../../core/rest/urls";

import Home from './components/pages/Home/Home';
import Kontakt from './components/pages/Kontakt/Kontakt';
import Impressum from './components/pages/Impressum/Impressum';
import Datenschutz from './components/pages/Datenschutz/Datenschutz';
import NotFound from './components/pages/404/404';
import MusikPage from './components/pages/MusikPage/MusikPage';
import products, { packageMusik, partyZelt } from '../../data/products';
import ZeltPage from './components/pages/ZeltPage/ZeltPage';
import Basket from './components/pages/Basket/Basket';
import { IProductVariant } from '../../core/interfaces/IProduct';
//import About from './components/pages/About';
//import NoMatch from './components/pages/404';

//import {fetchInit as homeFetchInit} from './actions/home';

export const urls = frontendUrls;

export interface WebsiteRoute {
    path: string;
    component: React.ComponentClass | React.FunctionComponent,
    exact?: boolean;
    title?: string;
    navigation?: boolean;
    routes?: WebsiteRoute[];
    getLoadDataAction?: Function;
}

export const websiteRoutes : WebsiteRoute[] = [{
    path: "/",
    exact: true,
    component: Home,
    title: "Home",
    navigation: true,
    routes: undefined,
    /*
    getLoadDataAction: (match: any) => {
        return homeFetchInit();
    }
    */
},{
    path: urls.musik,
    exact: true,
    component: MusikPage,
    title: "Musikanlage",
    navigation: true,
    routes: undefined
},
...Object.keys(packageMusik.variants).map((key: string) => {
    return {
        path: `${urls.musik}?variante=${key}`,
        exact: true,
        component: MusikPage,
        title: "Musikanlage",
        navigation: true,
        routes: undefined
    }
}),
{
    path: urls.zelt,
    exact: true,
    component: ZeltPage,
    title: "Zelt",
    navigation: true,
    routes: undefined
},
...Object.keys(partyZelt.variants).map((key: string) => {
    return {
        path: `${urls.zelt}?variante=${key}`,
        exact: true,
        component: MusikPage,
        title: "Zelt",
        navigation: true,
        routes: undefined
    }
}),
{
    path: urls.kontakt,
    exact: true,
    component: Kontakt,
    title: "Kontakt",
    navigation: true,
    routes: undefined,
    /*
    getLoadDataAction: (match: any) => {
        return homeFetchInit();
    }
    */
},{
    path: urls.warenkorb,
    exact: true,
    component: Basket,
    title: "Warenkorb",
    navigation: true,
    routes: undefined,
},{
    path: urls.impressum,
    exact: true,
    component: () => <Impressum key="impressum" name="impressum" contentTitle="Impressum" metaTitle="Impressum | Party Partner" metaDescription="" />,
    title: "Impressum",
    navigation: true,
    routes: undefined,
    /*
    getLoadDataAction: (match: any) => {
        return homeFetchInit();
    }
    */
},{
    path: urls.datenschutz,
    exact: true,
    component: () => <Datenschutz key="datenschutz" name="datenschutz" contentTitle="Datenschutz" metaTitle="Datenschutz | Party Partner" metaDescription="" />,
    title: "Datenschutz",
    navigation: true,
    routes: undefined,
    /*
    getLoadDataAction: (match: any) => {
        return homeFetchInit();
    }
    */
},{
    path: "*",
    component: () => <NotFound key="404" name="404" contentTitle="Nicht Gefunden" metaTitle="404 | Party Partner" metaDescription="" />,
}];

// variants
