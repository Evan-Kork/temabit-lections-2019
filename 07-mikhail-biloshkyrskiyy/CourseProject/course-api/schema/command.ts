import { model } from 'mongoose'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import '@/models/command'
const Command = model('Command')

const CommandType = new GraphQLObjectType({
    name: 'Command',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        position: {
            type: new GraphQLNonNull(GraphQLString)
        },
        img: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
})

export const getCommand = {
    type: new GraphQLList(CommandType),
    resolve(parent: any, args: any) {
        return Command.find()
    }
}

export const addCommand = {
    type: CommandType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        position: {
            type: new GraphQLNonNull(GraphQLString)
        },
        img: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve(parent: any, args: any) {
        if (await Command.findOne({ title: args.title }) === null) {
            const advantages = new Command({
                title: args.title,
                position: args.position,
                img: args.img
            })
            return advantages.save()
        }
    }
}

export const removeCommand = {
    type: CommandType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        return await Command.findByIdAndRemove(args.id)
    }
}

export const updateCommand = {
    type: CommandType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        position: {
            type: GraphQLString
        },
        img: {
            type: GraphQLString
        }
    },
    async resolve(parent: any, args: any) {
        return await Command.findOneAndUpdate({ title: args.title }, {
            $set: {
                title: args.title,
                position: args.position,
                img: args.img
            }
        }).setOptions({ omitUndefined: true })
    }
}