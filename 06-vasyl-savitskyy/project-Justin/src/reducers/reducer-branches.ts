import {
    BRANCHES_LOADING,
    BRANCHES_LOADED,
    BRANCHES_ERROR,
    SEARCH_BRANCHES,
    BRANCHES_CLEAR,
    BRANCHES_TOGGLE_PAGE
} from "../actionTypes";
import {
    INITIAL_SEARCH,
    INITIAL_COUNT_ON_PAGE
} from "../CONST";
import {
    getBranchesBySearch,
    getPageMap,
    getBranchesForView
} from "../utils";

export type InitialStateType = {
    loading: boolean
    error: boolean
    errorMessage: string | null
    response: string | null
    searchMap: any
    pageMap: any
    search: typeof INITIAL_SEARCH
    activePage: number
    countPages: number | null
    сountOnPage: typeof INITIAL_COUNT_ON_PAGE
    countItems: number | null
}

const initialState: InitialStateType = {
    loading: false,
    error: false,
    errorMessage: null,
    response: null,
    searchMap: new Map(),
    pageMap: new Map(),
    search: INITIAL_SEARCH,
    activePage: 1,
    countPages: null,
    сountOnPage: INITIAL_COUNT_ON_PAGE,
    countItems: null
};

const branches = (state = initialState, action: any): InitialStateType => {

    switch(action.type) {
        case BRANCHES_LOADING:
            return {
                ...state,
                error: false,
                loading: true,
                search: INITIAL_SEARCH
            };
        case BRANCHES_LOADED:
            const searchMap = new Map();
            const basicArray = action.payload.result !== null
                                    ? getBranchesForView([...action.payload.result])
                                    : null;
            searchMap.set(INITIAL_SEARCH, basicArray);
            const [pageMap, countPages] = getPageMap(basicArray, INITIAL_COUNT_ON_PAGE);
            return {
                ...state,
                error: false,
                loading: false,
                response: action.payload,
                searchMap,
                pageMap,
                countPages,
                countItems: basicArray !== null ? basicArray.length : null
            };
        case SEARCH_BRANCHES:
            const activePage = 1;
            if (state.searchMap.has(action.payload)) {
                const hasArr = state.searchMap.get(action.payload);
                const [map, count] = getPageMap(hasArr, state.сountOnPage);
                return {
                    ...state,
                    search: action.payload,
                    activePage,
                    pageMap: map,
                    countPages: count,
                    countItems: hasArr !== null ? hasArr.length : null
                };
            }
            const updateCachBranches = new Map();
            state.searchMap.forEach((val: any, key: any) => updateCachBranches.set(key, val));
            const branchesBySearch = getBranchesBySearch(
                state.searchMap.get(INITIAL_SEARCH),
                action.payload);
            updateCachBranches.set(action.payload, branchesBySearch);
            const [map, count] = getPageMap(branchesBySearch, state.сountOnPage);
            return {
                ...state,
                search: action.payload,
                searchMap: updateCachBranches,
                activePage,
                pageMap: map,
                countPages: count,
                countItems: branchesBySearch !== null ? branchesBySearch.length : null
            };
        case BRANCHES_TOGGLE_PAGE:
            return {
                ...state,
                activePage: action.payload
            }
        case BRANCHES_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.payload
            };
        case BRANCHES_CLEAR:
            return initialState;
        default:
            return state;
    }
};

export default branches;
