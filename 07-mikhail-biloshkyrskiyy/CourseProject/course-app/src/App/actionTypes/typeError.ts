import { iError } from '@/interfaces/iError'

export const ACTION_ERROR_START   = 'ACTION_ERROR_START'
export const ACTION_ERROR_SUCCESS = 'ACTION_ERROR_SUCCESS'
export const ACTION_ERROR_FAILURE = 'ACTION_ERROR_FAILURE'

export interface iErrorAction {
    type: typeof ACTION_ERROR_SUCCESS
    payload: iError
}