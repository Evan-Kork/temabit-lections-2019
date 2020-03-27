import {
    ACTION_CALCULATION_LENGTH_SUCCESS,
    iCalculationLengthAction,

    ACTION_CALCULATION_WEIGHT_SUCCESS,
    iCalculationWeigthAction
} from '@/actionTypes/typeCalculation'

const initialState = {
    length: {},
    weight: {}
}

type Action = iCalculationLengthAction & iCalculationWeigthAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_CALCULATION_LENGTH_SUCCESS:
            return {
                ...state,
                length: action.payload
            }
        case ACTION_CALCULATION_WEIGHT_SUCCESS:
            return {
                ...state,
                weight: action.payload
            }
        default:
            return state
    }
}