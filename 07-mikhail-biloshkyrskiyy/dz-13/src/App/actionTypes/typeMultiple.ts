import { iMultiple } from '~interface/iMultiple'

export const ACTION_MULTIPLE_START   = 'ACTION_MULTIPLE_START'
export const ACTION_MULTIPLE_SUCCESS = 'ACTION_MULTIPLE_SUCCESS'
export const ACTION_MULTIPLE_FAILURE = 'ACTION_MULTIPLE_FAILURE'

export interface iMultipleAction {
    type: typeof ACTION_MULTIPLE_SUCCESS
    payload: iMultiple
}