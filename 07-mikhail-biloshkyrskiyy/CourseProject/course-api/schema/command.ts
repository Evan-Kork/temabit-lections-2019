import { gql } from 'apollo-server-express'
import { model } from 'mongoose'

import { iCommand } from '@/interfaces/iCommand'

import '@/models/command'
const Command = model('Command')

export const CommandType = gql`
    type CommandType {
        id: String,
        title: String,
        position: String,
        img: String
    }

    input AddCommand {
        id: String,
        title: String!,
        position: String!,
        img: String!
    }

    input UpdateCommand {
        id: String,
        title: String!,
        position: String,
        img: String
    }
`

export const TypeDefsQuery = `
    command: [CommandType]
`

export const TypeDefsMutation = `
    addCommand(command: AddCommand!): CommandType,
    removeCommand(id: String!): CommandType,
    updateCommand(command: UpdateCommand!): CommandType
`

export const Query = {
    command: () => Command.find()
}

export const Mutation = {
    addCommand: async (parent: any, args: { command: iCommand }) => {
        if (await Command.findOne({ title: args.command.title }) === null) {
            const command = new Command({
                title: args.command.title,
                position: args.command.position,
                img: args.command.img
            })
            return command.save()
        }
    },
    removeCommand: async (parent: any, args: { id: string }) => {
        return await Command.findByIdAndRemove(args.id)
    },
    updateCommand: async (parent: any, args: { command: iCommand }) => {
        return await Command.findOneAndUpdate({ title: args.command.title }, {
            $set: {
                title: args.command.title,
                position: args.command.position,
                img: args.command.img
            }
        }).setOptions({ omitUndefined: true })
    }
}