import gql from 'graphql-tag'

import { iSponsor, iQuote, iCommand, iAdvantages } from '@/interfaces/iAbout'

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