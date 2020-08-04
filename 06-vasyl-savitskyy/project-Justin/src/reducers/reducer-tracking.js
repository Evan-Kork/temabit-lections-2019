import {
    TRACKING_LOADING,
    TRACKING_LOADED,
    TRACKING_ERROR,
    TRACKING_CLEAR
} from "../actionTypes";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    response: null
};

const tracking = (state = initialState, action) => {

    switch(action.type) {
        case TRACKING_LOADING:
            return {
                ...state,
                error: false,
                loading: true
            };
        case TRACKING_LOADED:
            return {
                ...state,
                error: false,
                loading: false,
                response: action.payload
            };
        case TRACKING_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case TRACKING_CLEAR:
            return initialState;
        default:
            return state;
    }
};

export default tracking;
