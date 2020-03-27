import {
    ACTION_MENU_SUCCESS,
    iMenuAction
} from '@/actionTypes/typeMenu'
import {
    ACTION_MENU_TRACKING_SUCCESS,
    iMenuTrackingAction
} from '@/actionTypes/typeTracking'
import {
    ACTION_MENU_BRANCH_SUCCESS,
    iMenuBranchAction
} from '@/actionTypes/typeBranch'

const initialState = {
    menu: {},
    tracking: {},
    branch: {}
}

type Action = iMenuAction & iMenuTrackingAction & iMenuBranchAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_MENU_SUCCESS:
            return {
                ...state,
                menu: action.payload
            }
        case ACTION_MENU_TRACKING_SUCCESS:
            return {
                ...state,
                tracking: action.payload
            }
        case ACTION_MENU_BRANCH_SUCCESS:
            return {
                ...state,
                branch: action.payload
            }
        default:
            return state
    }
}