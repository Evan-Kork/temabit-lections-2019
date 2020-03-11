import {
    ACTION_CALCULATION_WEIGHT_SUCCESS,
    iCalculationWeigthAction
} from '@/actionTypes/typeCalculation'

const initialState = {}

type Action =  iCalculationWeigthAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_CALCULATION_WEIGHT_SUCCESS:
            return action.payload
        default:
            return state
    }
}