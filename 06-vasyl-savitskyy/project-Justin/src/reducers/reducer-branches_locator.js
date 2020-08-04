import {
    BRANCHES_LOCATOR_LOADING,
    BRANCHES_LOCATOR_LOADED,
    BRANCHES_LOCATOR_ERROR,
    BRANCHES_LOCATOR_CLEAR
} from "../actionTypes";
import {
    getBranchesForView
} from "../utils";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    response: null,
    itemsForView: []
};

const branches_locator = (state = initialState, action) => {

    switch(action.type) {
        case BRANCHES_LOCATOR_LOADING:
            return {
                ...state,
                error: false,
                loading: true
            };
        case BRANCHES_LOCATOR_LOADED:
            const itemsForView = action.payload.result !== null
                                    ? getBranchesForView([...action.payload.result])
                                    : [];
            return {
                ...state,
                error: false,
                loading: false,
                response: action.payload,
                itemsForView
            };
        case BRANCHES_LOCATOR_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case BRANCHES_LOCATOR_CLEAR:
            return initialState;
        default:
            return state;
    }
};

export default branches_locator;
