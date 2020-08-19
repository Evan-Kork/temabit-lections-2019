import { Dispatch } from 'redux'
import Cookie from 'js-cookie'
import CryptoJS from 'crypto-js'

import {
    ACTION_LOGIN_START,
    ACTION_LOGIN_SUCCESS,
    ACTION_LOGIN_FAILURE,

    ACTION_INIT_LOGIN_START,
    ACTION_INIT_LOGIN_SUCCESS,
    ACTION_INIT_LOGIN_FAILURE,

    ACTION_RELOADING_TOKEN_START,
    ACTION_RELOADING_TOKEN_SUCCESS,
    ACTION_RELOADING_TOKEN_FAILURE,

    ACTION_LOGOUT
} from '@/actionTypes/typeAuth'
import { iLogin } from '@/interfaces/iAuth'

import {
    apiLogin,
    apiReloadingToken
} from '@/api/apiAuth'
import keys from '@/config'

export const actionLogin = (value: iLogin) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_LOGIN_START })
    apiLogin(value)
        .then(payload => {
            sessionStorage.setItem('rp', CryptoJS.AES.encrypt(JSON.stringify(payload), keys.UserPrivateKey).toString())
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

export const actionInitLogin = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_LOGIN_START })

    try {
        dispatch({
            type: ACTION_INIT_LOGIN_SUCCESS,
            payload: JSON.parse(CryptoJS.AES.decrypt(sessionStorage.getItem('rp') as string, keys.UserPrivateKey).toString(CryptoJS.enc.Utf8))
        })
    } catch (error) {
        dispatch({
            type: ACTION_INIT_LOGIN_FAILURE,
            error
        })
    }
}

export const actionReloadingToken = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_RELOADING_TOKEN_START })
    apiReloadingToken()
        .then(payload => {
            dispatch({
                type: ACTION_RELOADING_TOKEN_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_RELOADING_TOKEN_FAILURE,
            error
        }))
}

export const actionLogout = () => async (dispatch: Dispatch) => {
    Cookie.remove('jwt')
    Cookie.remove('tm')
    sessionStorage.removeItem('rp')
    dispatch({ type: ACTION_LOGOUT })
}