import website, {IWebsiteState} from './website';
import {basket, IBasketState} from './basket';
// import home from './home';
import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

const rootReducer = combineReducers({
    // home,
    basket,
    website,
    router: routerReducer
});

export type IState = {
    basket: IBasketState,
    website: IWebsiteState,
    router: RouterState
}

export default rootReducer;

// export type IState = ReturnType<typeof rootReducer>