import {
    ACTION_LOCATION_SUCCESS,
    iLocationAction,
} from '@/actionTypes/typeBranch'

const initialState = {}

export default (state = initialState, action: iLocationAction) => {
    switch (action.type) {
        case ACTION_LOCATION_SUCCESS:
            return action.payload
        default:
            return state
    }
}