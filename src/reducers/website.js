import {
    SET_WEBSITE_DATE
} from '../actions/website';

const initalState = {
    date: null
};

export default (state = initalState, action) => {
    switch(action.type){
        case SET_WEBSITE_DATE:
            return {
                ...state,
                date: action.value
            }
        default:
            return state;
    }
}