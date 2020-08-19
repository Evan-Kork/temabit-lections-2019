import { gql } from 'apollo-server-express'
import { model } from 'mongoose'

import { iSponsor } from '@/interfaces/iSponsor'

import '@/models/sponsor'
const Sponsor = model('Sponsor')

export const SponsorType = gql`
    type SponsorType {
        id: String,
        title: String,
        logotype: String,
        text: String
    }

    input AddSponsor {
        id: String,
        title: String!,
        logotype: String!,
        text: String!
    }

    input UpdateSponsor {
        id: String,
        title: String!,
        logotype: String,
        text: String
    }
`

export const TypeDefsQuery = `
    sponsor: [SponsorType]
`

export const TypeDefsMutation = `
    addSponsor(sponsor: AddSponsor!): SponsorType,
    removeSponsor(id: String!): SponsorType,
    updateSponsor(sponsor: UpdateSponsor!): SponsorType
`

export const Query = {
    sponsor: () => Sponsor.find()
}

export const Mutation = {
    addSponsor: async (parent: any, args: { sponsor: iSponsor }) => {
        if (await Sponsor.findOne({ title: args.sponsor.title }) === null) {
            const sponsor = new Sponsor({
                title: args.sponsor.title,
                text: args.sponsor.text,
                logotype: args.sponsor.logotype
            })
            return sponsor.save()
        }
    },
    removeSponsor: async (parent: any, args: { id: string }) => {
        return await Sponsor.findByIdAndRemove(args.id)
    },
    updateSponsor: async (parent: any, args: { sponsor: iSponsor }) => {
        return await Sponsor.findOneAndUpdate({ title: args.sponsor.title }, {
            $set: {
                title: args.sponsor.title,
                text: args.sponsor.text,
                logotype: args.sponsor.logotype
            }
        }).setOptions({ omitUndefined: true })
    }
}