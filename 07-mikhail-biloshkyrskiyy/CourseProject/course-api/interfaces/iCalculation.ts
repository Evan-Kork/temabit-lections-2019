import {
    WeightRangEnum,
    LengthRangEnum
} from '@/enum/calculation'

export interface iCalculationWeight {
    id: string
    title: string
    type: WeightRangEnum
    rang: number
}

export interface iCalculationLength {
    id: string
    title: string
    type: LengthRangEnum
    rang: number
}

export interface iCalculationPrice {
    id: string
    price: number
    rang: number
}