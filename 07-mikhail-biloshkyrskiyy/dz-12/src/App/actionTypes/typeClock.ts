import { iClock } from '~interface/iClock'

export const ACTION_CLOCK_START   = 'ACTION_CLOCK_START'
export const ACTION_CLOCK_SUCCESS = 'ACTION_CLOCK_SUCCESS'
export const ACTION_CLOCK_FAILURE = 'ACTION_CLOCK_FAILURE'

export interface iClockAction {
    type: typeof ACTION_CLOCK_SUCCESS
    payload: iClock
}