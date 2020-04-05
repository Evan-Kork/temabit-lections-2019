import { iUser, iApiResult } from '@/interfaces/iAuth'

export const ACTION_LOGIN_START   = 'ACTION_LOGIN_START'
export const ACTION_LOGIN_SUCCESS = 'ACTION_LOGIN_SUCCESS'
export const ACTION_LOGIN_FAILURE = 'ACTION_LOGIN_FAILURE'

export const ACTION_LOGOUT   = 'ACTION_LOGOUT'

export interface iLoginAction {
    type: typeof ACTION_LOGIN_SUCCESS
    payload: iUser & iApiResult
}

export interface iLogoutAction {
    type: typeof ACTION_LOGOUT
}