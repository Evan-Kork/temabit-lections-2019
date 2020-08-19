import { Dispatch } from 'redux'

import {
    ACTION_ERROR_START,
    ACTION_ERROR_SUCCESS,
    ACTION_ERROR_FAILURE
} from '@/actionTypes/typeError'
import { iError } from '@/interfaces/iError'

export const actionError = (value: iError) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_ERROR_START })

    try {
        dispatch({
            type: ACTION_ERROR_SUCCESS,
            payload: value,
        })
    } catch (error) {
        dispatch({
            type: ACTION_ERROR_FAILURE,
            error
        })
    }
}