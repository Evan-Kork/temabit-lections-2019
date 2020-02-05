import { iFibonacci } from '~interface/iFibonacci'

export const ACTION_FIBONACCI_START   = 'ACTION_FIBONACCI_START'
export const ACTION_FIBONACCI_SUCCESS = 'ACTION_FIBONACCI_SUCCESS'
export const ACTION_FIBONACCI_FAILURE = 'ACTION_FIBONACCI_FAILURE'

export interface iFibonacciAction {
    type: typeof ACTION_FIBONACCI_SUCCESS
    payload: iFibonacci
}