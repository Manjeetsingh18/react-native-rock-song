import api from '../apiclient'
const HOME = "HOME";
const HOME_SUCCESS = "HOME_SUCCESS";
const HOME_FAILURE = "HOME_FAILURE";

const initialState = {
    isLoading: false,
    songs: undefined
}


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case HOME: {
            return { ...state, isLoading: true }
        }
        case HOME_SUCCESS: {
            return { ...state, songs: action.result, isLoading: false }
        }
        case HOME_FAILURE: {
            return { ...state, isLoading: false }
        }
        default: return state
    }
}


export function songslist() {
    return (dispatch, getState) => new Promise(function (resolve, reject) {
        dispatch({ type: HOME });
        api.get().then((res) => {
            dispatch({ type: HOME_SUCCESS, result: res });
            resolve(res);
        }).catch((error) => {
            console.log('error', error)
            dispatch({ type: HOME_FAILURE });
        });
    });
}