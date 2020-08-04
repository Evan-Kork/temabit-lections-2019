import {
    BRANCH_TYPES_LOADING,
    BRANCH_TYPES_LOADED,
    BRANCH_TYPES_ERROR,
    BRANCH_TYPES_CLEAR
} from "../actionTypes";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    response: null
};

const branch_types = (state = initialState, action) => {

    switch(action.type) {
        case BRANCH_TYPES_LOADING:
            return {
                ...state,
                error: false,
                loading: true
            };
        case BRANCH_TYPES_LOADED:
            return {
                ...state,
                error: false,
                loading: false,
                response: action.payload
            };
        case BRANCH_TYPES_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case BRANCH_TYPES_CLEAR:
            return initialState;
        default:
            return state;
    }
};

export default branch_types;
