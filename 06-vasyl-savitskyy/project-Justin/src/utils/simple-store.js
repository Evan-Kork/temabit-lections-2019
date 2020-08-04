export const cookieEnabled = () => navigator.cookieEnabled;

export const createCookie = (name, value, expires, path = '/', domain) => {
    let cookie = name + "=" + escape(value) + ";";

    if (expires) {
        if(expires instanceof Date) {
            if (isNaN(expires.getTime())) {
                expires = new Date();
            }
        } else {
            expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
        }

        cookie += "expires=" + expires.toGMTString() + ";";
    }
    if (path) {
        cookie += "path=" + path + ";";
    }
    if (domain){
        cookie += "domain=" + domain + ";";
    }
    document.cookie = cookie;
}

export const getCookie = (name) => {
    const regexp = new RegExp("(?:^" + name + "|;\\s*"+ name + ")=(.*?)(?:;|$)", "g");
    const result = regexp.exec(document.cookie);
    return (result === null) ? null : result[1];
}

export const deleteCookie = (name, path, domain) => {
    if (getCookie(name)) {
        createCookie(name, "", -1, path, domain);
    }
}

export const simpleStore = (key, value) => {
    if (cookieEnabled()) {
        if (typeof value !== "undefined" && value !== null) {
            if ( typeof value === 'object' ) {
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        }

        if (typeof value === "undefined") {
            try {
                let data = localStorage.getItem(key);
                try {
                    data = JSON.parse(data);
                }
                catch(e) {
                    return data;
                }

            return data;
            }
            catch(e) {
                return '';
            }
        }

        if (value === null) {
            localStorage.removeItem(key);
        }
    }
}
