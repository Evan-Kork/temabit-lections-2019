import {
    BRANCHES_LOADING,
    BRANCHES_LOADED,
    BRANCHES_ERROR,
    SEARCH_BRANCHES,
    BRANCHES_CLEAR,
    BRANCHES_TOGGLE_PAGE
} from "../actionTypes";

const togglePageBranches = (num) => {
    return {
        type: BRANCHES_TOGGLE_PAGE,
        payload: num
    };
};

const searchBranches = (str) => {
    return {
        type: SEARCH_BRANCHES,
        payload: str
    };
};

const branchesClear = () => {
    return {
        type: BRANCHES_CLEAR
    };
};

const branchesLoading = () => {
    return {
        type: BRANCHES_LOADING
    };
};

const branchesLoaded = (data) => {
    return {
        type: BRANCHES_LOADED,
        payload: data
    };
};

const branchesError = (error) => {
    return {
        type: BRANCHES_ERROR,
        payload: error
    };
};

const fetchBranches = (justinService, dispatch) => (str = '', callbackSuccess = () => {}, callbackError = () => {}) => {
    dispatch(branchesLoading());
    justinService.fetchBranches(str)
        .then((res) => {
            dispatch(branchesLoaded(res));
            callbackSuccess();
        })
        .catch((err) => {
            dispatch(branchesError(err));
            callbackError();
        });
};

export {
    togglePageBranches,
    searchBranches,
    branchesClear,
    fetchBranches
};
