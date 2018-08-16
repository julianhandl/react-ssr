import {
    HOME_FETCH_INIT,
    HOME_FETCH_INIT_START,
    HOME_FETCH_INIT_ERROR
} from '../actions/home';

export const initalState = {
    data: null,
    loading: false
};

export default (state = initalState, action = {}) => {
    switch(action.type){
        case HOME_FETCH_INIT_START:
            return {
                ...state,
                loading: true
            }
        case HOME_FETCH_INIT_ERROR:
            return {
                ...state,
                loading: false
            }
        case HOME_FETCH_INIT:
            return {
                ...state,
                loading: false,
                data: action.payload.results
            }
        default:
            return state;
    }
}