import {
    SERVICES_LOADING,
    SERVICES_LOADED,
    SERVICES_ERROR,
    SERVICES_CLEAR
} from "../actionTypes";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    response: null
};

const services = (state = initialState, action) => {

    switch(action.type) {
        case SERVICES_LOADING:
            return {
                ...state,
                error: false,
                loading: true
            };
        case SERVICES_LOADED:
            return {
                ...state,
                error: false,
                loading: false,
                response: action.payload
            };
        case SERVICES_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case SERVICES_CLEAR:
            return initialState;
        default:
            return state;
    }
};

export default services;
