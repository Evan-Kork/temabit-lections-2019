import { Dispatch } from 'redux'

import {
    ACTION_MULTIPLE_CACHED_START,
    ACTION_MULTIPLE_CACHED_SUCCESS,
    ACTION_MULTIPLE_CACHED_FAILURE,
} from '~actionType/typeMultipleCached'
import { apiMultipleCached } from '~api/apiMultipleCached'
import { iMultipleCached } from '~interface/iMultipleCached'

export const actionMultipleCached = (value: iMultipleCached) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_MULTIPLE_CACHED_START })

    try {
        const data = await apiMultipleCached(value)
        dispatch({
            type: ACTION_MULTIPLE_CACHED_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_MULTIPLE_CACHED_FAILURE,
            payload: err,
            error: true
        })
    }
}