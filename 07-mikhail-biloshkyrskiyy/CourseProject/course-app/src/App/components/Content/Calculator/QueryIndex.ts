import gql from 'graphql-tag'
import { iCalculationLength, iCalculationWeight, iCalculationPrice } from '@/interfaces/iCalculation'

export interface CalculationInvertoryData {
    weight: iCalculationWeight[]
    parcelLength: iCalculationLength[]
    price: iCalculationPrice[]
}

export const GET_CALCULATION_INVERTORY = gql`
query{
	weight:getCalculationWeight {
        rang
        weight
    }
    parcelLength:getCalculationLength {
        rang
        parcelLength
    }
    price: getCalculationPrice {
        price
        rang
    }
}
`