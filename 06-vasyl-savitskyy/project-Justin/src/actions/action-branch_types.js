import {
    BRANCH_TYPES_LOADING,
    BRANCH_TYPES_LOADED,
    BRANCH_TYPES_ERROR,
    BRANCH_TYPES_CLEAR
} from "../actionTypes";

const branchTypesClear = () => {
    return {
        type: BRANCH_TYPES_CLEAR
    };
};

const branchTypesLoading = () => {
    return {
        type: BRANCH_TYPES_LOADING
    };
};

const branchTypesLoaded = (data) => {
    return {
        type: BRANCH_TYPES_LOADED,
        payload:data
    };
};

const branchTypesError = (error) => {
    return {
        type: BRANCH_TYPES_ERROR,
        payload: error
    };
};

const fetchBranchTypes = (justinService, dispatch) => (callbackSuccess = () => {}, callbackError = () => {}) => {
    dispatch(branchTypesLoading());
    justinService.fetchBranchTypes()
        .then(res => {
            dispatch(branchTypesLoaded(res));
            callbackSuccess();
        })
        .catch(err => {
            dispatch(branchTypesError(err));
            callbackError();
        });
};

export {
    branchTypesClear,
    fetchBranchTypes
};
