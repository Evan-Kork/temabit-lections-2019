import { gql } from 'apollo-server-express'
import { model } from 'mongoose'

import { iAdvantages } from '@/interfaces/iAdvantages'

import '@/models/advantages'
const Advantages = model('Advantages')

export const AdvantagesType = gql`
    type AdvantagesType {
        id: String,
        title: String,
        text: String,
        icon: String
    }

    input AddAdvantages {
        id: String,
        title: String!,
        text: String!,
        icon: String!
    }

    input UpdateAdvantages {
        id: String,
        title: String!,
        text: String,
        icon: String
    }
`

export const TypeDefsQuery = `
    advantages: [AdvantagesType]
`

export const TypeDefsMutation = `
    addAdvantages(advantages: AddAdvantages!): AdvantagesType,
    removeAdvantages(id: String!): AdvantagesType,
    updateAdvantages(advantages: UpdateAdvantages!): AdvantagesType
`

export const Query = {
    advantages: () => Advantages.find()
}

export const Mutation = {
    addAdvantages: async (parent: any, args: { advantages: iAdvantages }) => {
        if (await Advantages.findOne({ title: args.advantages.title }) === null) {
            const advantages = new Advantages({
                title: args.advantages.title,
                text: args.advantages.text,
                icon: args.advantages.icon
            })
            return advantages.save()
        }
    },
    removeAdvantages: async (parent: any, args: { id: string }) => {
        return await Advantages.findByIdAndRemove(args.id)
    },
    updateAdvantages: async (parent: any, args: { advantages: iAdvantages }) => {
        return await Advantages.findOneAndUpdate({ title: args.advantages.title }, {
            $set: {
                title: args.advantages.title,
                text: args.advantages.text,
                icon: args.advantages.icon
            }
        }).setOptions({ omitUndefined: true })
    }
}