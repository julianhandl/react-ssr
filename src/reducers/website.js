import {
    WEBSITE_SET_DEVICE,
    WEBSITE_TOGGLE_MENU
} from '../actions/website';

export const initalState = {
    device: null,
    menuOpen: false
};

export default (state = initalState, action = {}) => {
    switch(action.type){
        case WEBSITE_SET_DEVICE:
            return {
                ...state,
                device: action.device
            }
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