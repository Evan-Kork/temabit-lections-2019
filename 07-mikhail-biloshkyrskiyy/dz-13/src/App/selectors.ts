import iRootState from '~interface/iRootState'
import { iMultiple } from '~interface/iMultiple'
import { iFibonacci } from '~interface/iFibonacci'
import { iMultipleCached } from '~interface/iMultipleCached'
import { iMessage } from '~interface/iMessage'

export const getMultiple = (state: iRootState): iMultiple => state.Multiple
export const getFibonacci = (state: iRootState): iFibonacci => state.Fibonacci
export const getMultipleCached = (state: iRootState): iMultipleCached => state.MultipleCached
export const getMessage = (state: iRootState): iMessage => state.Message