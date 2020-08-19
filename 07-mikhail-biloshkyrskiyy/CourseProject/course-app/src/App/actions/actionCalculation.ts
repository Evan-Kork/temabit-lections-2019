import { Dispatch } from 'redux'

import {
    ACTION_CALCULATION_LENGTH_START,
    ACTION_CALCULATION_LENGTH_SUCCESS,
    ACTION_CALCULATION_LENGTH_FAILURE,
    ACTION_CALCULATION_WEIGHT_START,
    ACTION_CALCULATION_WEIGHT_SUCCESS,
    ACTION_CALCULATION_WEIGHT_FAILURE
} from '@/actionTypes/typeCalculation'

import { iCalculationWeight, iCalculationLength } from '@/interfaces/iCalculation'

export const actionCalculationWeight = (loading: boolean, value: iCalculationWeight[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_CALCULATION_WEIGHT_START })

    try {
        dispatch({
            type: ACTION_CALCULATION_WEIGHT_SUCCESS,
            payload: value,
            loading
        })
    } catch (error) {
        dispatch({
            type: ACTION_CALCULATION_WEIGHT_FAILURE,
            error
        })
    }
}
export const actionCalculationLength = (loading: boolean, value: iCalculationLength[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_CALCULATION_LENGTH_START })

    try {
        dispatch({
            type: ACTION_CALCULATION_LENGTH_SUCCESS,
            payload: value,
            loading
        })
    } catch (error) {
        dispatch({
            type: ACTION_CALCULATION_LENGTH_FAILURE,
            error
        })
    }
}