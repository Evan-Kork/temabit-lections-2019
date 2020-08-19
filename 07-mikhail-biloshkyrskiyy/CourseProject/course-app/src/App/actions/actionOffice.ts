import { Dispatch } from 'redux'

import {
    ACTION_MENU_OFFICE_START,
    ACTION_MENU_OFFICE_SUCCESS,
    ACTION_MENU_OFFICE_FAILURE,

    ACTION_OFFICE_START,
    ACTION_OFFICE_SUCCESS,
    ACTION_OFFICE_FAILURE,

    ACTION_LOCATION_SUCCESS,

    ACTION_INIT_OFFICE_START,
    ACTION_INIT_OFFICE_SUCCESS,
    ACTION_INIT_OFFICE_FAILURE,

    ACTION_OFFICE_TYPES_START,
    ACTION_OFFICE_TYPES_SUCCESS,
    ACTION_OFFICE_TYPES_FAILURE,

    ACTION_INIT_OFFICE_TYPES_START,
    ACTION_INIT_OFFICE_TYPES_SUCCESS,
    ACTION_INIT_OFFICE_TYPES_FAILURE,

    ACTION_LOCALITIES_START,
    ACTION_LOCALITIES_SUCCESS,
    ACTION_LOCALITIES_FAILURE,

    ACTION_INIT_LOCALITIES_START,
    ACTION_INIT_LOCALITIES_SUCCESS,
    ACTION_INIT_LOCALITIES_FAILURE,

    ACTION_LOCALITIES_SELECT_START,
    ACTION_LOCALITIES_SELECT_SUCCESS,
    ACTION_LOCALITIES_SELECT_FAILURE
} from '@/actionTypes/typeOffice'
import iMenu from '@/interfaces/iMenu'
import { iLocalities, LocalitiesType } from '@/interfaces/iOffice'

import {
    apiOfficeAll,
    apiOfficeId,
    apiOfficeLocality,
    apiOfficeLocator,
    apiOfficeTypes,
    apiLocalities
} from '@/api/apiOffice'

export const actionMenuOffice = (loading: boolean, value: iMenu[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_MENU_OFFICE_START })

    try {
        dispatch({
            type: ACTION_MENU_OFFICE_SUCCESS,
            payload: value,
            loading
        })
    } catch (error) {
        dispatch({
            type: ACTION_MENU_OFFICE_FAILURE,
            error
        })
    }
}

export const actionOfficeAll = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_OFFICE_START })

    apiOfficeAll()
        .then(payload => {
            sessionStorage.setItem('office', JSON.stringify(payload))
            dispatch({
                type: ACTION_OFFICE_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_OFFICE_FAILURE,
            error
        }))
}

export const actionOfficeArray = (value: string[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_OFFICE_START })

    if (value.length >= 2) {
        apiOfficeLocator({ location: value.join(',') }).then(payload => {
            sessionStorage.setItem('office', JSON.stringify(payload))
            sessionStorage.setItem('location', JSON.stringify({ location: value.join(',') }))
            dispatch({
                type: ACTION_LOCATION_SUCCESS,
                payload: { location: value.join(',') }
            })
            dispatch({
                type: ACTION_OFFICE_SUCCESS,
                payload
            })
        }).catch(error => dispatch({
            type: ACTION_OFFICE_FAILURE,
            error
        }))
    } else if (value.length === 1 && !isNaN(+value[0])) {
        apiOfficeId(+value[0]).then(payload => {
            sessionStorage.setItem('office', JSON.stringify(payload))
            sessionStorage.setItem('location', JSON.stringify({ location: value.join(',') }))
            dispatch({
                type: ACTION_LOCATION_SUCCESS,
                payload: { location: value.join(',') }
            })
            dispatch({
                type: ACTION_OFFICE_SUCCESS,
                payload
            })
        }).catch(error => dispatch({
            type: ACTION_OFFICE_FAILURE,
            error
        }))
    } else if (value.length === 1) {
        apiOfficeLocality({ location: value[0] }).then(payload => {
            sessionStorage.setItem('office', JSON.stringify(payload))
            sessionStorage.setItem('location', JSON.stringify({ location: value.join(',') }))
            dispatch({
                type: ACTION_LOCATION_SUCCESS,
                payload: { location: value.join(',') }
            })
            dispatch({
                type: ACTION_OFFICE_SUCCESS,
                payload
            })
        }).catch(error => dispatch({
            type: ACTION_OFFICE_FAILURE,
            error
        }))
    }
}

export const actionInitOffice = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_OFFICE_START })

    try {
        dispatch({
            type: ACTION_INIT_OFFICE_SUCCESS,
            payload: JSON.parse(sessionStorage.getItem('office') as string)
        })
    } catch (error) {
        dispatch({
            type: ACTION_INIT_OFFICE_FAILURE,
            error
        })
    }
}

export const actionOfficeTypes = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_OFFICE_TYPES_START })

    apiOfficeTypes()
        .then(payload => {
            sessionStorage.setItem('officeTypes', JSON.stringify(payload))
            dispatch({
                type: ACTION_OFFICE_TYPES_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_OFFICE_TYPES_FAILURE,
            error
        }))
}

export const actionInitOfficeTypes = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_OFFICE_TYPES_START })

    try {
        dispatch({
            type: ACTION_INIT_OFFICE_TYPES_SUCCESS,
            payload: JSON.parse(sessionStorage.getItem('officeTypes') as string)
        })
    } catch (error) {
        dispatch({
            type: ACTION_INIT_OFFICE_TYPES_FAILURE,
            error
        })
    }
}

export const actionLocalities = (type: LocalitiesType) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_LOCALITIES_START })

    apiLocalities(type)
        .then(payload => {
            sessionStorage.setItem('localities', JSON.stringify(payload))
            dispatch({
                type: ACTION_LOCALITIES_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_LOCALITIES_FAILURE,
            error
        }))
}

export const actionInitLocalities = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_LOCALITIES_START })

    try {
        dispatch({
            type: ACTION_INIT_LOCALITIES_SUCCESS,
            payload: JSON.parse(sessionStorage.getItem('localities') as string)
        })
    } catch (error) {
        dispatch({
            type: ACTION_INIT_LOCALITIES_FAILURE,
            error
        })
    }
}

export const actionLocalitiesSelect = (value: iLocalities[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_LOCALITIES_SELECT_START })

    try {
        dispatch({
            type: ACTION_LOCALITIES_SELECT_SUCCESS,
            payload: value
        })
    } catch (error) {
        dispatch({
            type: ACTION_LOCALITIES_SELECT_FAILURE,
            error
        })
    }
}