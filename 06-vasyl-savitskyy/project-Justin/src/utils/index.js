import {isMobile} from "./for-setting.ts";
import {combiteParametersThroughComma} from "./combine-params";
import {
    cookieEnabled,
    createCookie,
    getCookie,
    deleteCookie,
    simpleStore
} from "./simple-store";
import {
    b64_to_utf8,
    utf8_to_b64
} from "./encode";
import {
    getBranchesBySearch,
    chunks,
    getPageMap,
    getBranchesForView
} from "./selectors";

export {
    isMobile,
    combiteParametersThroughComma,
    cookieEnabled,
    createCookie,
    getCookie,
    deleteCookie,
    simpleStore,
    b64_to_utf8,
    utf8_to_b64,
    getBranchesBySearch,
    chunks,
    getPageMap,
    getBranchesForView
};
