import {
    isMobile,
    simpleStore
} from "../utils";
import {
    SCREEN_RESIZE,
    ACCEPT_COOKIES
} from "../actionTypes";

const newParamForSimpleStore = (key: string, param: boolean): boolean => {
    simpleStore(key, param);
    return param;
}

type InitialStateType = {
    isMobile: boolean
    isCookies: boolean
    lang: "ua" | null
}

const initialState: InitialStateType = {
    isMobile: isMobile(),
    isCookies: !!simpleStore("isCookiesJustin") || false,
    lang: "ua"
};

const setting = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SCREEN_RESIZE:
            return {
                ...state,
                isMobile: action.payload
            };
        case ACCEPT_COOKIES:
            const isCookies = newParamForSimpleStore("isCookiesJustin", true);
            return {
                ...state,
                isCookies
            };
        default:
            return state;
    }
};

export default setting;
