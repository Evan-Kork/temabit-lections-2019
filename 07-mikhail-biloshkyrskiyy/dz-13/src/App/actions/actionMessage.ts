import { Dispatch } from 'redux'

import {
    ACTION_MESSAGE_START,
    ACTION_MESSAGE_SUCCESS,
    ACTION_MESSAGE_FAILURE,
} from '~actionType/typeMessage'
import { apiMessage } from '~api/apiMessage'

export const actionMessage = (value: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_MESSAGE_START })

    try {
        const data = await apiMessage(value)
        dispatch({
            type: ACTION_MESSAGE_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: ACTION_MESSAGE_FAILURE,
            payload: err,
            error: true
        })
    }
}