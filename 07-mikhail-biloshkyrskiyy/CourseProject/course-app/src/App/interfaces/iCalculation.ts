export interface iCalculationWeight {
    weight: string
    rang: WeightRang
}
export interface iCalculationLength {
    parcelLength: string
    rang: LegthRang
}
export interface iCalculationPrice {
    price: number
    rang: number
}

export enum WeightRang {
    'XS' = 1,
    'S' = 2,
    'M' = 3,
    'L' = 4,
    'XL' = 5,
    'XXL' = 6,
    'XXXL' = 7,
}
export enum LegthRang {
    'Short' = 1,
    'Medium' = 2,
    'Long' = 3,
}