import {
    ACTION_BRANCH_SUCCESS,
    iBranchAction,

    ACTION_INIT_BRANCH_SUCCESS,
    iInitBranchAction,

    ACTION_LOCALITIES_SUCCESS,
    iLocalitiesAction,

    ACTION_INIT_LOCALITIES_SUCCESS,
    iInitLocalitiesAction,

    ACTION_LOCALITIES_SELECT_SUCCESS,
    iLocalitiesSelectAction,

    ACTION_LOCATION_SUCCESS,
    iLocationAction,

    ACTION_BRANCH_TYPES_SUCCESS,
    iBranchTypesAction,

    ACTION_INIT_BRANCH_TYPES_SUCCESS,
    iInitBranchTypesAction
} from '@/actionTypes/typeBranch'

const initialState = {
    branch: {},
    branchTypes: {},
    location: {},
    localities: {},
    localitiesSelect: {}
}

type Action = iBranchAction & iInitBranchAction & iLocalitiesAction & iInitLocalitiesAction &
    iLocalitiesSelectAction & iLocationAction & iBranchTypesAction & iInitBranchTypesAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_BRANCH_SUCCESS:
            return {
                ...state,
                branch: action.payload
            }
        case ACTION_INIT_BRANCH_SUCCESS:
            return {
                ...state,
                branch: action.payload
            }
        case ACTION_BRANCH_TYPES_SUCCESS:
            return {
                ...state,
                branchTypes: action.payload
            }
        case ACTION_INIT_BRANCH_TYPES_SUCCESS:
            return {
                ...state,
                branchTypes: action.payload
            }
        case ACTION_LOCATION_SUCCESS:
            return {
                ...state,
                location: action.payload
            }
        case ACTION_LOCALITIES_SUCCESS:
            return {
                ...state,
                localities: action.payload
            }
        case ACTION_INIT_LOCALITIES_SUCCESS:
            return {
                ...state,
                localities: action.payload
            }
        case ACTION_LOCALITIES_SELECT_SUCCESS:
            return {
                ...state,
                localitiesSelect: action.payload
            }
        default:
            return state
    }
}