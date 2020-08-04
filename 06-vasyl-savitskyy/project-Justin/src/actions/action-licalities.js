import {
    LOCALITIES_LOADING,
    LOCALITIES_LOADED,
    LOCALITIES_ERROR,
    LOCALITIES_CLEAR,
    LOCALITIES_TOGGLE_REGION
} from "../actionTypes";

const toggleRegionLocalities = (str) => {
    return {
        type: LOCALITIES_TOGGLE_REGION,
        payload: str
    };
};

const localitiesClear = () => {
    return {
        type: LOCALITIES_CLEAR
    };
};

const localitiesLoading = () => {
    return {
        type: LOCALITIES_LOADING
    };
};

const localitiesLoaded = (data) => {
    return {
        type: LOCALITIES_LOADED,
        payload: data
    };
};

const localitiesError = (error) => {
    return {
        type: LOCALITIES_ERROR,
        payload: error
    };
};

const fetchLocalities = (justinService, dispatch) => (str = '', callbackSuccess = () => {}, callbackError = () => {}) => {
    dispatch(localitiesLoading());
    justinService.fetchLocalities(str)
        .then((res) => {
            dispatch(localitiesLoaded(res));
            callbackSuccess();
        })
        .catch((err) => {
            dispatch(localitiesError(err));
            callbackError();
        });
};

export {
    localitiesClear,
    fetchLocalities,
    toggleRegionLocalities
};
