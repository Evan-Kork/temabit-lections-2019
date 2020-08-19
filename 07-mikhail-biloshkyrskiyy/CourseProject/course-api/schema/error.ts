import { gql } from 'apollo-server-express'
import { model } from 'mongoose'

import { iError } from '@/interfaces/iError'

import '@/models/error'
const Error = model('Error')

export const ErrorType = gql`
    type ErrorType {
        id: String,
        title: String,
        info: String,
        date: String
    }

    input AddError {
        id: String,
        title: String!,
        info: String!,
        date: String!
    }

    input UpdateError {
        id: String,
        title: String!,
        info: String,
        date: String
    }
`

export const TypeDefsQuery = `
    error: [ErrorType]
`

export const TypeDefsMutation = `
    addError(error: AddError!): ErrorType,
    removeError(id: String!): ErrorType,
    updateError(error: UpdateError!): ErrorType
`

export const Query = {
    error: () => Error.find()
}

export const Mutation = {
    addError: async (parent: any, args: { error: iError }) => {
        if (await Error.findOne({ title: args.error.title }) === null) {
            const error = new Error({
                title: args.error.title,
                info: args.error.info,
                date: args.error.date
            })
            return error.save()
        }
    },
    removeError: async (parent: any, args: { id: string }) => {
        return await Error.findByIdAndRemove(args.id)
    },
    updateError: async (parent: any, args: { error: iError }) => {
        return await Error.findOneAndUpdate({ error: args.error.title }, {
            $set: {
                title: args.error.title,
                info: args.error.info,
                date: args.error.date
            }
        }).setOptions({ omitUndefined: true })
    }
}