import { model } from 'mongoose'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import '@/models/error'
const Error = model('Error')

const ErrorType = new GraphQLObjectType({
    name: 'Error',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        error: {
            type: new GraphQLNonNull(GraphQLString)
        },
        errorInfo: {
            type: new GraphQLNonNull(GraphQLString)
        },
        date: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

export const getError = {
    type: new GraphQLList(ErrorType),
    resolve(parent: any, args: any) {
        return Error.find()
    }
}

export const addError = {
    type: ErrorType,
    args: {
        error: {
            type: new GraphQLNonNull(GraphQLString)
        },
        errorInfo: {
            type: new GraphQLNonNull(GraphQLString)
        },
        date: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve(parent: any, args: any) {
        if (await Error.findOne({ error: args.error }) === null) {
            const error = new Error({
                error: args.error,
                errorInfo: args.errorInfo,
                date: args.date
            })
            return error.save()
        }
    }
}