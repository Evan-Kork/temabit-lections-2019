import { model } from 'mongoose'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import '@/models/quote'
const Quote = model('Quote')

const QuoteType = new GraphQLObjectType({
    name: 'Quote',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

export const getQuote = {
    type: new GraphQLList(QuoteType),
    resolve(parent: any, args: any) {
        return Quote.find()
    }
}

export const addQuote = {
    type: QuoteType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve(parent: any, args: any) {
        if (await Quote.findOne({ title: args.title }) === null) {
            const advantages = new Quote({
                title: args.title,
                text: args.text
            })
            return advantages.save()
        }
    }
}

export const removeQuote = {
    type: QuoteType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        return await Quote.findByIdAndRemove(args.id)
    }
}

export const updateQuote = {
    type: QuoteType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: GraphQLString
        }
    },
    async resolve(parent: any, args: any) {
        return await Quote.findOneAndUpdate({ title: args.title }, {
            $set: {
                title: args.title,
                text: args.text
            }
        }).setOptions({ omitUndefined: true })
    }
}