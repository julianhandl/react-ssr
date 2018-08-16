import fetch from 'node-fetch';

export const HOME_FETCH_INIT_START = 'HOME_FETCH_INIT_START';
export const HOME_FETCH_INIT_ERROR = 'HOME_FETCH_INIT_ERROR';
export const HOME_FETCH_INIT = 'HOME_FETCH_INIT';

export function fetchInit(){
    return (dispatch) => {
        dispatch({
            type: HOME_FETCH_INIT_START
        });
        return new Promise((resolve, reject) => {
            // has to return an action that returns a primise
            fetch("https://swapi.co/api/people")
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: HOME_FETCH_INIT,
                        payload: data
                    });
                    resolve();
                })
                .catch(err => {
                    dispatch({
                        type: HOME_FETCH_INIT_ERROR
                    });
                    reject(err)
                })
        })
    }
}
