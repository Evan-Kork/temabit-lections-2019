import {
    SCREEN_RESIZE,
    ACCEPT_COOKIES
} from "../actionTypes";

type ScreenResizeActionType = {
    type: typeof SCREEN_RESIZE
    payload: boolean
};

const screenResize = (isMobile: boolean): ScreenResizeActionType => {
    return {
        type: SCREEN_RESIZE,
        payload: isMobile
    };
};

type AcceptCookiesActionType = {
    type: typeof ACCEPT_COOKIES
};

const acceptCookies = (): AcceptCookiesActionType => {
    return {
        type: ACCEPT_COOKIES
    };
};

export {
    screenResize,
    acceptCookies
};
