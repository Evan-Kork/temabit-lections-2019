import { Schema, model } from 'mongoose'

enum WeightRang {
    'XS' = 1,
    'S' = 2,
    'M' = 3,
    'L' = 4,
    'XL' = 5,
    'XXL' = 6,
    'XXXL' = 7,
}
enum LegthRang {
    'Short' = 1,
    'Medium' = 2,
    'Long' = 3,
}
const CalculationWeightSchema = new Schema({
    weight: {
        type: String,
        maxlength: 255,
        minlength: 2,
        required: true
    },
    rang: {
        type: WeightRang,
        maxlength: 255,
        minlength: 2,
        required: true
    }
})
const CalculationLengthSchema = new Schema({
    parcelLength: {
        type: String,
        maxlength: 255,
        minlength: 2,
        required: true
    },
    rang: {
        type: LegthRang,
        maxlength: 255,
        minlength: 2,
        required: true
    }
})
const CalculationPriceSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    rang: {
        type: Number,
        required: true
    }
})

model('CalculationWeight', CalculationWeightSchema)
model('CalculationLegth', CalculationLengthSchema)
model('CalculationPrice', CalculationPriceSchema)