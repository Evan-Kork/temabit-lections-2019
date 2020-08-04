import {
    BRANCHES_LOCATOR_LOADING,
    BRANCHES_LOCATOR_LOADED,
    BRANCHES_LOCATOR_ERROR,
    BRANCHES_LOCATOR_CLEAR
} from "../actionTypes";

const branchesLocatorClear = () => {
    return {
        type: BRANCHES_LOCATOR_CLEAR
    };
};

const branchesLocatorLoading = () => {
    return {
        type: BRANCHES_LOCATOR_LOADING
    };
};

const branchesLocatorLoaded = (data) => {
    return {
        type: BRANCHES_LOCATOR_LOADED,
        payload:data
    };
};

const branchesLocatorError = (error) => {
    return {
        type: BRANCHES_LOCATOR_ERROR,
        payload: error
    };
};

const fetchBranchesLocator = (justinService, dispatch) => (address = '', callbackSuccess = () => {}, callbackError = () => {}) => {
    dispatch(branchesLocatorLoading());
    justinService.fetchBranchesLocator(address)
        .then((res) => {
            dispatch(branchesLocatorLoaded(res));
            callbackSuccess();
        })
        .catch((err) => {
            dispatch(branchesLocatorError(err));
            callbackError();
        });
};

export {
    branchesLocatorClear,
    fetchBranchesLocator
};
