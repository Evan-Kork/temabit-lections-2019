import {
    ACTION_BRANCH_TYPES_SUCCESS,
    iBranchTypesAction,

    ACTION_INIT_BRANCH_TYPES_SUCCESS,
    iInitBranchTypesAction
} from '@/actionTypes/typeBranch'

const initialState = {}

export default (state = initialState, action: iBranchTypesAction & iInitBranchTypesAction) => {
    switch (action.type) {
        case ACTION_BRANCH_TYPES_SUCCESS:
            return action.payload
        case ACTION_INIT_BRANCH_TYPES_SUCCESS:
            return action.payload
        default:
            return state
    }
}