import { iClock } from '~interface/iClock'
import { iMessage } from '~interface/iMessage'

export default interface iRootState {
    Clock: iClock
    Message: iMessage
}