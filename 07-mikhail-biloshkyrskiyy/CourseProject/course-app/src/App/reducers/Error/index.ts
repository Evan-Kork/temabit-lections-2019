import {
    ACTION_ERROR_SUCCESS,
    iErrorAction,
} from '@/actionTypes/typeError'

const initialState = {}

export default (state = initialState, action: iErrorAction) => {
    switch (action.type) {
        case ACTION_ERROR_SUCCESS:
            return action.payload
        default:
            return state
    }
}