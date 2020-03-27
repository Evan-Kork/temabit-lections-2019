import { iQuote, iCommand, iSponsor, iAdvantages } from '@/interfaces/iAbout'

export const ACTION_ADVANTAGES_START = 'ACTION_ADVANTAGES_START'
export const ACTION_ADVANTAGES_SUCCESS = 'ACTION_ADVANTAGES_SUCCESS'
export const ACTION_ADVANTAGES_FAILURE = 'ACTION_ADVANTAGES_FAILURE'

export const ACTION_COMMAND_START = 'ACTION_COMMAND_START'
export const ACTION_COMMAND_SUCCESS = 'ACTION_COMMAND_SUCCESS'
export const ACTION_COMMAND_FAILURE = 'ACTION_COMMAND_FAILURE'

export const ACTION_QUOTE_START = 'ACTION_QUOTE_START'
export const ACTION_QUOTE_SUCCESS = 'ACTION_QUOTE_SUCCESS'
export const ACTION_QUOTE_FAILURE = 'ACTION_QUOTE_FAILURE'

export const ACTION_SPONSOR_START = 'ACTION_SPONSOR_START'
export const ACTION_SPONSOR_SUCCESS = 'ACTION_SPONSOR_SUCCESS'
export const ACTION_SPONSOR_FAILURE = 'ACTION_SPONSOR_FAILURE'

export interface iAdvantagesAction {
    type: typeof ACTION_ADVANTAGES_SUCCESS
    payload: iAdvantages
}

export interface iCommandAction {
    type: typeof ACTION_COMMAND_SUCCESS
    payload: iCommand
}

export interface iQuoteAction {
    type: typeof ACTION_QUOTE_SUCCESS
    payload: iQuote
}

export interface iSponsorAction {
    type: typeof ACTION_SPONSOR_SUCCESS
    payload: iSponsor
}