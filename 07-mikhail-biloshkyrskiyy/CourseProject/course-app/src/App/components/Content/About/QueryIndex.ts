import gql from 'graphql-tag'

import iAdvantages from '@/interfaces/iAdvantages'
import iCommand from '@/interfaces/iCommand'
import iQuote from '@/interfaces/iQuote'
import iSponsor from '@/interfaces/iSponsor'

export interface AboutInvertoryData {
    advantages: iAdvantages[]
    command: iCommand[]
    quote: iQuote[]
    sponsor: iSponsor[]
}

export const GET_DATA_INVERTORY = gql`
    query{
        advantages: getAdvantages {
            id
            title
            icon
            text
        }
        command: getCommand {
            id
            title
            position
            img
        }
        quote: getQuote {
            id
            title
            text
        }
        sponsor: getSponsor {
            id
            title
            logotype
            text
        }
    }
`