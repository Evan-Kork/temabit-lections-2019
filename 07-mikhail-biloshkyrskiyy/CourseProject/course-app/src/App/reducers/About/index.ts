import {
    ACTION_ADVANTAGES_SUCCESS,
    iAdvantagesAction,

    ACTION_COMMAND_SUCCESS,
    iCommandAction,

    ACTION_QUOTE_SUCCESS,
    iQuoteAction,

    ACTION_SPONSOR_SUCCESS,
    iSponsorAction
} from '@/actionTypes/typeAbout'

const initialState = {
    advantages: {},
    command: {},
    quote: {},
    sponsor: {}
}

type Action = iAdvantagesAction & iCommandAction & iQuoteAction & iSponsorAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_ADVANTAGES_SUCCESS:
            return {
                ...state,
                advantages: action.payload
            }
        case ACTION_COMMAND_SUCCESS:
            return {
                ...state,
                command: action.payload
            }
        case ACTION_QUOTE_SUCCESS:
            return {
                ...state,
                quote: action.payload
            }
        case ACTION_SPONSOR_SUCCESS:
            return {
                ...state,
                sponsor: action.payload
            }
        default:
            return state
    }
}