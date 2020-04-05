import { Dispatch } from 'redux'
import Cookie from 'js-cookie'
import {
    ACTION_LOGIN_START,
    ACTION_LOGIN_SUCCESS,
    ACTION_LOGIN_FAILURE,

    ACTION_LOGOUT
} from '@/actionTypes/typeAuth'
import { iLogin } from '@/interfaces/iAuth'

import {
    apiLogin
} from '@/api/apiAuth'

export const actionLogin = (value: iLogin) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_LOGIN_START })

    apiLogin(value)
        .then(payload => {
            dispatch({
                type: ACTION_LOGIN_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_LOGIN_FAILURE,
            error
        }))
}

export const actionLogout = () => async (dispatch: Dispatch) => {
    Cookie.remove('jwt')
    dispatch({ type: ACTION_LOGOUT })
}