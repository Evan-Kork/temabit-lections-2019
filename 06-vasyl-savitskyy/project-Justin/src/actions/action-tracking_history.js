import {
    TRACKING_HISTORY_LOADING,
    TRACKING_HISTORY_LOADED,
    TRACKING_HISTORY_ERROR,
    TRACKING_HISTORY_CLEAR
} from "../actionTypes";

const trackingHistoryClear = () => {
    return {
        type: TRACKING_HISTORY_CLEAR
    };
};

const trackingHistoryLoading = () => {
    return {
        type: TRACKING_HISTORY_LOADING
    };
};

const trackingHistoryLoaded = (data) => {
    return {
        type: TRACKING_HISTORY_LOADED,
        payload:data
    };
};

const trackingHistoryError = (error) => {
    return {
        type: TRACKING_HISTORY_ERROR,
        payload: error
    };
};

const fetchTrackingHistory = (justinService, dispatch) => (str = "", callbackSuccess = () => {}, callbackError = () => {}) => {
    dispatch(trackingHistoryLoading());
    justinService.fetchTrackingHistory(str)
        .then(res => {
            dispatch(trackingHistoryLoaded(res));
            callbackSuccess();
        })
        .catch(err => {
            dispatch(trackingHistoryError(err));
            callbackError();
        });
};

export {
    trackingHistoryClear,
    fetchTrackingHistory
};
