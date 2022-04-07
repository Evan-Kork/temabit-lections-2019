import { merge } from 'ramda'

import {
    ACTION_MESSAGE_SUCCESS,
    iMessageAction
} from '~actionType/typeMessage'

const initialState = {}
export default (state = initialState, action: iMessageAction) => {
    switch (action.type) {
        case ACTION_MESSAGE_SUCCESS:
            return merge(state, action.payload)
        default:
            return state
    }
}