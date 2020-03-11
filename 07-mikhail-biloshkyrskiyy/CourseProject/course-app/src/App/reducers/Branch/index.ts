import {
    ACTION_BRANCH_SUCCESS,
    iBranchAction,

    ACTION_INIT_BRANCH_SUCCESS,
    iInitBranchAction
} from '@/actionTypes/typeBranch'

const initialState = {}

export default (state = initialState, action: iBranchAction & iInitBranchAction) => {
    switch (action.type) {
        case ACTION_BRANCH_SUCCESS:
            return action.payload
        case ACTION_INIT_BRANCH_SUCCESS:
            return action.payload
        default:
            return state
    }
}