import { merge } from 'ramda'

import {
    ACTION_MULTIPLE_SUCCESS,
    iMultipleAction
} from '~actionType/typeMultiple'

const initialState = {}

export default (state = initialState, action: iMultipleAction) => {
    switch (action.type) {
        case ACTION_MULTIPLE_SUCCESS:
            return merge(state, action.payload)
        default:
            return state
    }
}