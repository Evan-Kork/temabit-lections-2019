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
        advantages {
            title
            icon
            text
        }
        command {
            title
            position
            img
        }
        quote {
            title
            text
        }
        sponsor {
            title
            logotype
            text
        }
    }
`