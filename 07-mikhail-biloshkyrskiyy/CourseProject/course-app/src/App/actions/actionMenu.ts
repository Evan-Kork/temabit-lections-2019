import { Dispatch } from 'redux'

import {
    ACTION_MENU_START,
    ACTION_MENU_SUCCESS,
    ACTION_MENU_FAILURE
} from '@/actionTypes/typeMenu'
import iMenu from '@/interfaces/iMenu'

export const actionMenu = (loading: boolean, payload: iMenu[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_MENU_START })

    try {
        dispatch({
            type:ACTION_MENU_SUCCESS,
            payload,
            loading
        })
    } catch(error) {
        dispatch({
            type:ACTION_MENU_FAILURE,
            error
        })
    }
}