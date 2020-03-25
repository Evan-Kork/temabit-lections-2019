import { gql } from 'apollo-server-express'
import { model } from 'mongoose'

import { iQuote } from '@/interfaces/iQuote'

import '@/models/quote'
const Quote = model('Quote')

export const QuoteType = gql`
    type QuoteType {
        id: String,
        title: String,
        text: String
    }

    input AddQuote {
        id: String,
        title: String!,
        text: String!
    }

    input UpdateQuote {
        id: String,
        title: String!,
        text: String
    }
`

export const TypeDefsQuery = `
    quote: [QuoteType]
`

export const TypeDefsMutation = `
    addQuote(quote: AddQuote!): QuoteType,
    removeQuote(id: String!): QuoteType,
    updateQuote(quote: UpdateQuote!): QuoteType
`

export const Query = {
    quote: () => Quote.find()
}

export const Mutation = {
    addQuote: async (parent: any, args: { quote: iQuote }) => {
        if (await Quote.findOne({ title: args.quote.title }) === null) {
            const quote = new Quote({
                title: args.quote.title,
                text: args.quote.text
            })
            return quote.save()
        }
    },
    removeQuote: async (parent: any, args: { id: string }) => {
        return await Quote.findByIdAndRemove(args.id)
    },
    updateQuote: async (parent: any, args: { quote: iQuote }) => {
        return await Quote.findOneAndUpdate({ title: args.quote.title }, {
            $set: {
                title: args.quote.title,
                text: args.quote.text
            }
        }).setOptions({ omitUndefined: true })
    }
}