export const utf8_to_b64 = (str) => {
    if (str === null) return undefined;
    
    return window.btoa(unescape(encodeURIComponent(str)));
}

export const b64_to_utf8 = (str) => {
    if (str === null) return undefined;

    return decodeURIComponent(escape(window.atob(str)));
}