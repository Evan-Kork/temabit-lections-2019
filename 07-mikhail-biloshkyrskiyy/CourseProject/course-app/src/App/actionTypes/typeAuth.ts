import { iUser, iApiResult, iToken } from '@/interfaces/iAuth'

export const ACTION_LOGIN_START   = 'ACTION_LOGIN_START'
export const ACTION_LOGIN_SUCCESS = 'ACTION_LOGIN_SUCCESS'
export const ACTION_LOGIN_FAILURE = 'ACTION_LOGIN_FAILURE'

export const ACTION_INIT_LOGIN_START   = 'ACTION_INIT_LOGIN_START'
export const ACTION_INIT_LOGIN_SUCCESS = 'ACTION_INIT_LOGIN_SUCCESS'
export const ACTION_INIT_LOGIN_FAILURE = 'ACTION_INIT_LOGIN_FAILURE'

export const ACTION_RELOADING_TOKEN_START   = 'ACTION_RELOADING_TOKEN_START'
export const ACTION_RELOADING_TOKEN_SUCCESS = 'ACTION_RELOADING_TOKEN_SUCCESS'
export const ACTION_RELOADING_TOKEN_FAILURE = 'ACTION_RELOADING_TOKEN_FAILURE'

export const ACTION_LOGOUT   = 'ACTION_LOGOUT'

export interface iLoginAction {
    type: typeof ACTION_LOGIN_SUCCESS
    payload: iUser & iApiResult & iToken
}

export interface iInitLoginAction {
    type: typeof ACTION_INIT_LOGIN_SUCCESS
    payload: iUser & iApiResult & iToken
}

export interface iReloadingToken {
    type: typeof ACTION_RELOADING_TOKEN_SUCCESS
    payload: iApiResult & iToken
}

export interface iLogoutAction {
    type: typeof ACTION_LOGOUT
}