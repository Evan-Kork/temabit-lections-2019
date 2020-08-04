import {
    TRACKING_LOADING,
    TRACKING_LOADED,
    TRACKING_ERROR,
    TRACKING_CLEAR
} from "../actionTypes";

const trackingClear = () => {
    return {
        type: TRACKING_CLEAR
    };
};

const trackingLoading = () => {
    return {
        type: TRACKING_LOADING
    };
};

const trackingLoaded = (data) => {
    return {
        type: TRACKING_LOADED,
        payload:data
    };
};

const trackingError = (error) => {
    return {
        type: TRACKING_ERROR,
        payload: error
    };
};

const fetchTracking = (justinService, dispatch) => (str = "", callbackSuccess = () => {}, callbackError = () => {}) => {
    dispatch(trackingLoading());
    justinService.fetchTracking(str)
        .then(res => {
            dispatch(trackingLoaded(res));
            callbackSuccess();
        })
        .catch(err => {
            dispatch(trackingError(err));
            callbackError();
        });
};

export {
    trackingClear,
    fetchTracking
};
