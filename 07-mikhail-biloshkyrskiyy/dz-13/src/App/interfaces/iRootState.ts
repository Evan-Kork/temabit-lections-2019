import { iMultiple } from '~interface/iMultiple'
import { iFibonacci } from '~interface/iFibonacci'
import { iMultipleCached } from '~interface/iMultipleCached'
import { iMessage } from '~interface/iMessage'

export default interface iRootState {
    Multiple: iMultiple
    Message: iMessage
    Fibonacci: iFibonacci
    MultipleCached: iMultipleCached
}