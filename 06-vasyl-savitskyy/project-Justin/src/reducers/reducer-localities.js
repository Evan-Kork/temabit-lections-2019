import {
    LOCALITIES_LOADING,
    LOCALITIES_LOADED,
    LOCALITIES_ERROR,
    LOCALITIES_CLEAR,
    LOCALITIES_TOGGLE_REGION
} from "../actionTypes";
import {
    simpleStore
} from "../utils";

const initialState = {
    loading: false,
    error: false,
    errorMessage: null,
    response: null,
    region: simpleStore("regionLocalitiesJustin") || "",
    regionsMap: new Map()
};

/**
 * Розбиття відповіді з серверу на мапу по областям
 * @param {array/null} data - масив даних з серверу
 * 
 * @returns {Map} - мапа для відображення в контент блоці
 */
const generateRegionsMap = (data) => {
    const map = new Map();
    if (data === null) return map;

    map.set("", data);
    for (let i = 0; i < data.length; i++) {
        if (!map.has(data[i].parent_title_ua)) {
            map.set(data[i].parent_title_ua, [data[i]]);
        } else {
            const list = map.get(data[i].parent_title_ua);
            list.push(data[i]);
            map.set(data[i].parent_title_ua, list);
        }
    }

    return map;
}

const localities = (state = initialState, action) => {

    switch(action.type) {
        case LOCALITIES_LOADING:
            return {
                ...state,
                error: false,
                loading: true
            };
        case LOCALITIES_LOADED:
            const regionsMap = generateRegionsMap([...action.payload.result]);
            return {
                ...state,
                error: false,
                loading: false,
                response: action.payload,
                regionsMap
            };
        case LOCALITIES_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case LOCALITIES_TOGGLE_REGION:
            simpleStore("regionLocalitiesJustin", action.payload);
            return {
                ...state,
                region: action.payload
            };
        case LOCALITIES_CLEAR:
            return initialState;
        default:
            return state;
    }
};

export default localities;
