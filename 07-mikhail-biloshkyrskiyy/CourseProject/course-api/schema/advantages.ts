import { model } from 'mongoose'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import '@/models/advantages'
const Advantages = model('Advantages')

const AdvantagesType = new GraphQLObjectType({
    name: 'Advantages',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        icon: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: GraphQLString
        }
    })
})

export const getAdvantages = {
    type: new GraphQLList(AdvantagesType),
    resolve(parent: any, args: any) {
        return Advantages.find()
    }
}

export const addAdvantages = {
    type: AdvantagesType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        icon: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: GraphQLString
        }
    },
    async resolve(parent: any, args: any) {
        if (await Advantages.findOne({ title: args.title }) === null) {
            const advantages = new Advantages({
                title: args.title,
                icon: args.icon,
                text: args.text
            })
            return advantages.save()
        }
    }
}

export const removeAdvantages = {
    type: AdvantagesType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        return await Advantages.findByIdAndRemove(args.id)
    }
}

export const updateAdvantages = {
    type: AdvantagesType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        icon: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        }
    },
    async resolve(parent: any, args: any) {
        return await Advantages.findOneAndUpdate({ title: args.title }, {
            $set: {
                title: args.title,
                icon: args.icon,
                text: args.text
            }
        }).setOptions({ omitUndefined: true })
    }
}