import { Dispatch } from 'redux'

import {
    ACTION_FIBONACCI_START,
    ACTION_FIBONACCI_SUCCESS,
    ACTION_FIBONACCI_FAILURE,
} from '~actionType/typeFibonacci'
import { apiFibonacci } from '~api/apiFibonacci'
import { iFibonacci } from '~interface/iFibonacci'

export const actionFibonacci = (value: iFibonacci) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_FIBONACCI_START })
    try {
        const data = await apiFibonacci(value)
        dispatch({
            type: ACTION_FIBONACCI_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_FIBONACCI_FAILURE,
            payload: err,
            error: true
        })
    }
}