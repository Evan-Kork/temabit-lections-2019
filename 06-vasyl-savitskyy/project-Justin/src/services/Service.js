export default class Service {
    constructor() {
        this.loaded = false;
    }

    initGetUrlParams = (obj) => {
        if (typeof obj !== 'object' || obj === undefined || obj === null) {
            return null;
        }
    
        const arr = [];
        for(const key in obj) {
            if (obj[key] === null || typeof obj[key] === 'undefined') {
                continue;
            }
    
            arr.push(`${key}=${obj[key]}`);
        }
        if (!arr.length) {
            return null;
        }
    
        return `?${arr.join('&')}`;
    }
    
    getRequest = async(url, errTxt) => {
        if (!this.loaded) return;
        
        try {
            const response = await fetch(url, {
                // credentials: 'include',
                // mode: 'no-cors'
            });

            if (!response.ok) {
                console.error('!response.ok response: ', response);
                throw Error(response.statusText);
            }
    
            const json = await response.json();
            return json;
        } catch (error) {
            if (errTxt) {
                console.error(errTxt);
            }

            throw error;
            // throw errTxt;
        }
    }
}