import { merge } from 'ramda'

import {
    ACTION_FIBONACCI_SUCCESS,
    iFibonacciAction
} from '~actionType/typeFibonacci'

const initialState = {}

export default (state = initialState, action: iFibonacciAction) => {
    switch (action.type) {
        case ACTION_FIBONACCI_SUCCESS:
            return merge(state, action.payload)
        default:
            return state
    }
}