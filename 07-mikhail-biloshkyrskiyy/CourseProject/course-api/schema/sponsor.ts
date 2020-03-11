import { model } from 'mongoose'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import '@/models/sponsor'
const Sponsor = model('Sponsor')

const SponsorType = new GraphQLObjectType({
    name: 'Sponsor',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        logotype: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: GraphQLString
        }
    })
})

export const getSponsor = {
    type: new GraphQLList(SponsorType),
    resolve(parent: any, args: any) {
        return Sponsor.find()
    }
}

export const addSponsor = {
    type: SponsorType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        logotype: {
            type: new GraphQLNonNull(GraphQLString)
        },
        text: {
            type: GraphQLString
        }
    },
    async resolve(parent: any, args: any) {
        if (await Sponsor.findOne({ title: args.title }) === null) {
            const advantages = new Sponsor({
                title: args.title,
                logotype: args.logotype,
                text: args.text
            })
            return advantages.save()
        }
    }
}

export const removeSponsor = {
    type: SponsorType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    async resolve(parent: any, args: any) {
        return await Sponsor.findByIdAndRemove(args.id)
    }
}

export const updateSponsor = {
    type: SponsorType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        logotype: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        }
    },
    async resolve(parent: any, args: any) {
        return await Sponsor.findOneAndUpdate({ title: args.title }, {
            $set: {
                title: args.title,
                logotype: args.logotype,
                text: args.text
            }
        }).setOptions({ omitUndefined: true })
    }
}