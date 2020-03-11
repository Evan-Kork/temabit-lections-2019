import { Dispatch } from 'redux'

import {
    ACTION_MENU_TRACKING_START,
    ACTION_MENU_TRACKING_SUCCESS,
    ACTION_MENU_TRACKING_FAILURE,

    ACTION_DECLARATION_SUCCESS,

    ACTION_TRACKING_START,
    ACTION_TRACKING_SUCCESS,
    ACTION_TRACKING_FAILURE,
    ACTION_INIT_TRACKING_START,
    ACTION_INIT_TRACKING_SUCCESS,
    ACTION_INIT_TRACKING_FAILURE,

    ACTION_TRACKING_HISTORY_START,
    ACTION_TRACKING_HISTORY_SUCCESS,
    ACTION_TRACKING_HISTORY_FAILURE,
    ACTION_INIT_TRACKING_HISTORY_START,
    ACTION_INIT_TRACKING_HISTORY_SUCCESS,
    ACTION_INIT_TRACKING_HISTORY_FAILURE
} from '@/actionTypes/typeTracking'
import iMenu from '@/interfaces/iMenu'

import {
    apiTracking,
    apiTrackingHistory
} from '@/api/apiTracking'
import { iDeclaration } from '@/interfaces/iTracking'

export const actionMenuTracking = (loading: boolean, value: iMenu[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_MENU_TRACKING_START })

    try {
        dispatch({
            type: ACTION_MENU_TRACKING_SUCCESS,
            payload: value,
            loading
        })
    } catch (error) {
        dispatch({
            type: ACTION_MENU_TRACKING_FAILURE,
            error
        })
    }
}

export const actionTracking = (value: iDeclaration) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_TRACKING_START })

    apiTracking(value)
        .then(payload => {
            sessionStorage.setItem('tracking', JSON.stringify(payload))
            sessionStorage.setItem('declaration', JSON.stringify(value))
            dispatch({
                type: ACTION_DECLARATION_SUCCESS,
                payload: value
            })
            dispatch({
                type: ACTION_TRACKING_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_TRACKING_FAILURE,
            error
        }))
}
export const actionInitTracking = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_TRACKING_START })

    try {
        dispatch({
            type: ACTION_INIT_TRACKING_SUCCESS,
            payload: JSON.parse(sessionStorage.getItem('tracking') as string)
        })
    } catch (error) {
        dispatch({
            type: ACTION_INIT_TRACKING_FAILURE,
            error
        })
    }
}

export const actionTrackingHistory = (value: iDeclaration) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_TRACKING_HISTORY_START })

    apiTrackingHistory(value)
        .then(payload => {
            sessionStorage.setItem('trackingHistory', JSON.stringify(payload))
            sessionStorage.setItem('declaration', JSON.stringify(value))
            dispatch({
                type: ACTION_DECLARATION_SUCCESS,
                payload: value
            })
            dispatch({
                type: ACTION_TRACKING_HISTORY_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_TRACKING_HISTORY_FAILURE,
            error
        }))
}
export const actionInitTrackingHistory = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_TRACKING_HISTORY_START })

    try {
        dispatch({
            type: ACTION_INIT_TRACKING_HISTORY_SUCCESS,
            payload: JSON.parse(sessionStorage.getItem('trackingHistory') as string)
        })
    } catch (error) {
        dispatch({
            type: ACTION_INIT_TRACKING_HISTORY_FAILURE,
            error
        })
    }
}