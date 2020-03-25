import gql from 'graphql-tag'
import { iCalculationLength, iCalculationWeight, iCalculationPrice } from '@/interfaces/iCalculation'

export interface CalculationInvertoryData {
    weight: iCalculationWeight[]
    _length: iCalculationLength[]
    price: iCalculationPrice[]
}

export const GET_CALCULATION_INVERTORY = gql`
query{
    weight:calculationWeight {\
        title
        type
        rang
    }
    _length:calculationLength {
        title
        type
        rang
    }
    price: calculationPrice {
        price
        rang
    }
}
`