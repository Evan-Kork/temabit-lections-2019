import { Dispatch } from 'redux'

import {
    ACTION_CLOCK_START,
    ACTION_CLOCK_SUCCESS,
    ACTION_CLOCK_FAILURE,
} from '~actionType/typeClock'
import { apiClock } from '~api/apiClock'
import { iClock } from '~interface/iClock'

export const actionClock = (value: iClock) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_CLOCK_START })

    try {
        const data = await apiClock(value)
        dispatch({
            type: ACTION_CLOCK_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_CLOCK_FAILURE,
            payload: err,
            error: true
        })
    }
}