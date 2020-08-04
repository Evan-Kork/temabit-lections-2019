import {
    SERVICES_LOADING,
    SERVICES_LOADED,
    SERVICES_ERROR,
    SERVICES_CLEAR
} from "../actionTypes";

const servicesClear = () => {
    return {
        type: SERVICES_CLEAR
    };
};

const servicesLoading = () => {
    return {
        type: SERVICES_LOADING
    };
};

const servicesLoaded = (data) => {
    return {
        type: SERVICES_LOADED,
        payload:data
    };
};

const servicesError = (error) => {
    return {
        type: SERVICES_ERROR,
        payload: error
    };
};

const fetchServices = (justinService, dispatch) => (callbackSuccess = () => {}, callbackError = () => {}) => {
    dispatch(servicesLoading());
    justinService.fetchServices()
        .then(res => {
            dispatch(servicesLoaded(res));
            callbackSuccess();
        })
        .catch(err => {
            dispatch(servicesError(err));
            callbackError();
        });
};

export {
    servicesClear,
    fetchServices
};
