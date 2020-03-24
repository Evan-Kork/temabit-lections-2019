import {
    SCREEN_RESIZE,
    ACCEPT_COOKIES
} from "../actionTypes";

const screenResize = (isMobile) => {
    return {
        type: SCREEN_RESIZE,
        payload: isMobile
    };
};

const acceptCookies = () => {
    return {
        type: ACCEPT_COOKIES
    };
};

export {
    screenResize,
    acceptCookies
};
