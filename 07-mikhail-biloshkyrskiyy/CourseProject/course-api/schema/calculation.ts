import { gql } from 'apollo-server-express'
import { model } from 'mongoose'

import { WeightRangEnum, LengthRangEnum } from '@/enum/calculation'
import { iCalculationWeight, iCalculationLength, iCalculationPrice } from '@/interfaces/iCalculation'

import '@/models/calculation'
const CalculationWeight = model('CalculationWeight')
const CalculationLength = model('CalculationLegth')
const CalculationPrice = model('CalculationPrice')

const EnumCalculationWeightRangGql = gql`
    enum EnumCalculationWeightRang {
        XS,
        S,
        M,
        L,
        XL,
        XXL,
        XXXL
    }
`
const EnumCalculationLengthRangGql = gql`
    enum EnumCalculationLengthRang {
        Short,
        Medium,
        Long
    }
`

export const CalculationType = gql`
    ${EnumCalculationWeightRangGql}
    ${EnumCalculationLengthRangGql}

    type CalculationWeightType {
        id: String,
        title: String,
        type: EnumCalculationWeightRang,
        rang: Int
    }

    type CalculationLengthType {
        id: String,
        title: String,
        type: EnumCalculationLengthRang,
        rang: Int
    }

    type CalculationPriceType {
        id: String,
        price: Int,
        rang: Int
    }

    input AddCalculationWeight {
        id: String,
        title: String!,
        type: EnumCalculationWeightRang!,
        rang: Int!
    }

    input UpdateCalculationWeight {
        id: String,
        title: String!,
        type: EnumCalculationWeightRang!,
        rang: Int
    }

    input AddCalculationLength {
        id: String,
        title: String!,
        type: EnumCalculationLengthRang!,
        rang: Int!
    }

    input UpdateCalculationLength {
        id: String,
        title: String!,
        type: EnumCalculationLengthRang!,
        rang: Int
    }

    input AddCalculationPrice {
        id: String,
        price: Int!,
        rang: Int!
    }

    input UpdateCalculationPrice {
        id: String,
        price: Int!,
        rang: Int!
    }
`

export const TypeDefsQuery = `
    calculationWeight: [CalculationWeightType],
    calculationLength: [CalculationLengthType],
    calculationPrice: [CalculationPriceType],
    getTypeCalculationWeight(type: EnumCalculationWeightRang!): [CalculationWeightType]
    getTypeCalculationLength(type: EnumCalculationLengthRang!): [CalculationLengthType]
`

export const TypeDefsMutation = `
    addCalculationWeight(calculationWeight: AddCalculationWeight!): CalculationWeightType,
    removeCalculationWeight(id: String!): CalculationWeightType,
    updateCalculationWeight(calculationWeight: AddCalculationWeight!): CalculationWeightType,

    addCalculationLength(calculationLength: AddCalculationLength!): CalculationLengthType,
    removeCalculationLength(id: String!): CalculationLengthType,
    updateCalculationLength(calculationLength: AddCalculationLength!): CalculationLengthType,

    addCalculationPrice(calculationPrice: AddCalculationPrice!): CalculationPriceType,
    removeCalculationPrice(id: String!): CalculationPriceType,
    updateCalculationPrice(calculationPrice: AddCalculationPrice!): CalculationPriceType
`

export const Query = {
    calculationWeight: () => CalculationWeight.find(),
    calculationLength: () => CalculationLength.find(),
    calculationPrice: () => CalculationPrice.find(),

    getTypeCalculationWeight: async (parent: any, args: { type: WeightRangEnum }) => await CalculationWeight.find({ type: args.type }),
    getTypeCalculationLength: async (parent: any, args: { type: LengthRangEnum }) => await CalculationLength.find({ type: args.type })
}

export const Mutation = {
    addCalculationWeight: async (parent: any, args: { calculationWeight: iCalculationWeight }) => {
        if (await CalculationWeight.findOne({ title: args.calculationWeight.title, type: args.calculationWeight.type }) === null) {
            const calculationWeight = new CalculationWeight({
                title: args.calculationWeight.title,
                type: args.calculationWeight.type,
                rang: args.calculationWeight.rang
            })
            return calculationWeight.save()
        }
    },
    addCalculationLength: async (parent: any, args: { calculationLength: iCalculationLength }) => {
        if (await CalculationLength.findOne({ title: args.calculationLength.title, type: args.calculationLength.type }) === null) {
            const calculationLength = new CalculationLength({
                title: args.calculationLength.title,
                type: args.calculationLength.type,
                rang: args.calculationLength.rang
            })
            return calculationLength.save()
        }
    },
    addCalculationPrice: async (parent: any, args: { calculationPrice: iCalculationPrice }) => {
        if (await CalculationPrice.findOne({ rang: args.calculationPrice.rang }) === null) {
            const calculationPrice = new CalculationPrice({
                price: args.calculationPrice.price,
                rang: args.calculationPrice.rang
            })
            return calculationPrice.save()
        }
    },

    removeCalculationWeight: async (parent: any, args: { id: string }) => {
        return await CalculationWeight.findByIdAndRemove(args.id)
    },
    removeCalculationLength: async (parent: any, args: { id: string }) => {
        return await CalculationLength.findByIdAndRemove(args.id)
    },
    removeCalculationPrice: async (parent: any, args: { id: string }) => {
        return await CalculationPrice.findByIdAndRemove(args.id)
    },

    updateCalculationWeight: async (parent: any, args: { calculationWeight: iCalculationWeight }) => {
        return await CalculationWeight.findOneAndUpdate({ title: args.calculationWeight.title, type: args.calculationWeight.type }, {
            $set: {
                title: args.calculationWeight.title,
                type: args.calculationWeight.type,
                rang: args.calculationWeight.rang
            }
        }).setOptions({ omitUndefined: true })
    },
    updateCalculationLength: async (parent: any, args: { calculationLength: iCalculationLength }) => {
        return await CalculationLength.findOneAndUpdate({ title: args.calculationLength.title, type: args.calculationLength.type }, {
            $set: {
                title: args.calculationLength.title,
                type: args.calculationLength.type,
                rang: args.calculationLength.rang
            }
        }).setOptions({ omitUndefined: true })
    },
    updateCalculationPrice: async (parent: any, args: { calculationPrice: iCalculationPrice }) => {
        return await CalculationPrice.findOneAndUpdate({ rang: args.calculationPrice.rang }, {
            $set: {
                price: args.calculationPrice.price,
                rang: args.calculationPrice.rang
            }
        }).setOptions({ omitUndefined: true })
    }
}