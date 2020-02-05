import { iMessage } from '~interface/iMessage'

export const ACTION_MESSAGE_START   = 'ACTION_MESSAGE_START'
export const ACTION_MESSAGE_SUCCESS = 'ACTION_MESSAGE_SUCCESS'
export const ACTION_MESSAGE_FAILURE = 'ACTION_MESSAGE_FAILURE'

export interface iMessageAction {
    type: typeof ACTION_MESSAGE_SUCCESS
    payload: iMessage
}