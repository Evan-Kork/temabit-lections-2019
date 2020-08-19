import { Dispatch } from 'redux'

import {
    ACTION_ADVANTAGES_START,
    ACTION_ADVANTAGES_SUCCESS,
    ACTION_ADVANTAGES_FAILURE,

    ACTION_COMMAND_START,
    ACTION_COMMAND_SUCCESS,
    ACTION_COMMAND_FAILURE,

    ACTION_QUOTE_START,
    ACTION_QUOTE_SUCCESS,
    ACTION_QUOTE_FAILURE,

    ACTION_SPONSOR_START,
    ACTION_SPONSOR_SUCCESS,
    ACTION_SPONSOR_FAILURE
} from '@/actionTypes/typeAbout'
import { iQuote, iCommand, iSponsor, iAdvantages } from '@/interfaces/iAbout'

export const actionAdvantages = (value: iAdvantages[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_ADVANTAGES_START })

    try {
        dispatch({
            type: ACTION_ADVANTAGES_SUCCESS,
            payload: value
        })
    } catch (error) {
        dispatch({
            type: ACTION_ADVANTAGES_FAILURE,
            error
        })
    }
}

export const actionCommand = (value: iCommand[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_COMMAND_START })

    try {
        dispatch({
            type: ACTION_COMMAND_SUCCESS,
            payload: value
        })
    } catch (error) {
        dispatch({
            type: ACTION_COMMAND_FAILURE,
            error
        })
    }
}

export const actionQuote = (value: iQuote[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_QUOTE_START })

    try {
        dispatch({
            type: ACTION_QUOTE_SUCCESS,
            payload: value
        })
    } catch (error) {
        dispatch({
            type: ACTION_QUOTE_FAILURE,
            error
        })
    }
}

export const actionSponsor = (value: iSponsor[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_SPONSOR_START })

    try {
        dispatch({
            type: ACTION_SPONSOR_SUCCESS,
            payload: value
        })
    } catch (error) {
        dispatch({
            type: ACTION_SPONSOR_FAILURE,
            error
        })
    }
}