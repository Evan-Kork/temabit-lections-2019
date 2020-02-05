import { Dispatch } from 'redux'

import {
    ACTION_MULTIPLE_START,
    ACTION_MULTIPLE_SUCCESS,
    ACTION_MULTIPLE_FAILURE,
} from '~actionType/typeMultiple'
import { apiMultiple } from '~api/apiMultiple'
import { iMultiple } from '~interface/iMultiple'

export const actionMultiple = (value: iMultiple) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_MULTIPLE_START })

    try {
        const data = await apiMultiple(value)
        dispatch({
            type: ACTION_MULTIPLE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_MULTIPLE_FAILURE,
            payload: err,
            error: true
        })
    }
}