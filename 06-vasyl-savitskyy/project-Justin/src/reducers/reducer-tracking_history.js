import {
    TRACKING_HISTORY_LOADING,
    TRACKING_HISTORY_LOADED,
    TRACKING_HISTORY_ERROR,
    TRACKING_HISTORY_CLEAR
} from "../actionTypes";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    response: null
};

const tracking_history = (state = initialState, action) => {

    switch(action.type) {
        case TRACKING_HISTORY_LOADING:
            return {
                ...state,
                error: false,
                loading: true
            };
        case TRACKING_HISTORY_LOADED:
            return {
                ...state,
                error: false,
                loading: false,
                response: action.payload
            };
        case TRACKING_HISTORY_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case TRACKING_HISTORY_CLEAR:
            return initialState;
        default:
            return state;
    }
};

export default tracking_history;
