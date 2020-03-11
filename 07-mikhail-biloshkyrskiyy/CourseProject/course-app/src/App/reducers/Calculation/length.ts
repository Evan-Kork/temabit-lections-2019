import {
    ACTION_CALCULATION_LENGTH_SUCCESS,
    iCalculationLengthAction
} from '@/actionTypes/typeCalculation'

const initialState = {}

type Action = iCalculationLengthAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_CALCULATION_LENGTH_SUCCESS:
            return action.payload
        default:
            return state
    }
}