import { merge } from 'ramda'

import {
    ACTION_CLOCK_SUCCESS,
    iClockAction
} from '~actionType/typeClock'

const initialState = {}

export default (state = initialState, action: iClockAction) => {
    switch (action.type) {
        case ACTION_CLOCK_SUCCESS:
            return merge(state, action.payload)
        default:
            return state
    }
}