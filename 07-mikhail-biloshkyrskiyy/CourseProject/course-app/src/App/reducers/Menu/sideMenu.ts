import {
    ACTION_MENU_TRACKING_SUCCESS,
    iMenuTrackingAction
} from '@/actionTypes/typeTracking'
import {
    ACTION_MENU_BRANCH_SUCCESS,
    iMenuBranchAction
} from '@/actionTypes/typeBranch'

const initialState = {
    loading: false
}

export default (state = initialState, action: iMenuTrackingAction & iMenuBranchAction) => {
    switch (action.type) {
        case ACTION_MENU_TRACKING_SUCCESS:
            return action.payload
        case ACTION_MENU_BRANCH_SUCCESS:
            return action.payload
        default:
            return state
    }
}