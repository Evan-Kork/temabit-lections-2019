import { merge } from 'ramda'

import {
    ACTION_MULTIPLE_CACHED_SUCCESS,
    iMultipleCachedAction
} from '~actionType/typeMultipleCached'

const initialState = {}

export default (state = initialState, action: iMultipleCachedAction) => {
    switch (action.type) {
        case ACTION_MULTIPLE_CACHED_SUCCESS:
            return merge(state, action.payload)
        default:
            return state
    }
}