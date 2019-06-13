import {
    WEBSITE_TOGGLE_MENU,
    WebsiteActions
} from '../actions/website';

export interface IWebsiteState {
    device: string;
    menuOpen: boolean;
}

export const websiteInitialState : IWebsiteState = {
    device: "",
    menuOpen: false
};

export default (state: IWebsiteState = websiteInitialState, action: WebsiteActions) : IWebsiteState => {
    switch(action.type){
        case WEBSITE_TOGGLE_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen
            }
        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                menuOpen: false
            }
        default:
            return state;
    }
}