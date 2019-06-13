import website, {IWebsiteState} from './website';
// import home from './home';
import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';

const rootReducer = combineReducers({
    // home,
    website,
    router: routerReducer
});

export type IState = {
    website?: IWebsiteState,
    router: RouterState
}

export default rootReducer;

// export type IState = ReturnType<typeof rootReducer>