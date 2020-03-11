import {
    ACTION_DECLARATION_SUCCESS,
    iDeclarationAction,
} from '@/actionTypes/typeTracking'

const initialState = {}

export default (state = initialState, action: iDeclarationAction) => {
    switch (action.type) {
        case ACTION_DECLARATION_SUCCESS:
            return action.payload
        default:
            return state
    }
}