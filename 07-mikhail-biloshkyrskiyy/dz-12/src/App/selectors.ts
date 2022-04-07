import iRootState from '~interface/iRootState'
import { iClock } from '~interface/iClock'
import { iMessage } from '~interface/iMessage'

export const getClock = (state: iRootState): iClock => state.Clock
export const getMessage = (state: iRootState): iMessage => state.Message