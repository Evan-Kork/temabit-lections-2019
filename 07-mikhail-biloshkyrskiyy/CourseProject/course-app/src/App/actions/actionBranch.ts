import { Dispatch } from 'redux'

import {
    ACTION_MENU_BRANCH_START,
    ACTION_MENU_BRANCH_SUCCESS,
    ACTION_MENU_BRANCH_FAILURE,

    ACTION_BRANCH_START,
    ACTION_BRANCH_SUCCESS,
    ACTION_BRANCH_FAILURE,

    ACTION_LOCATION_SUCCESS,

    ACTION_INIT_BRANCH_START,
    ACTION_INIT_BRANCH_SUCCESS,
    ACTION_INIT_BRANCH_FAILURE,

    ACTION_BRANCH_TYPES_START,
    ACTION_BRANCH_TYPES_SUCCESS,
    ACTION_BRANCH_TYPES_FAILURE,

    ACTION_INIT_BRANCH_TYPES_START,
    ACTION_INIT_BRANCH_TYPES_SUCCESS,
    ACTION_INIT_BRANCH_TYPES_FAILURE,

    ACTION_LOCALITIES_START,
    ACTION_LOCALITIES_SUCCESS,
    ACTION_LOCALITIES_FAILURE,

    ACTION_INIT_LOCALITIES_START,
    ACTION_INIT_LOCALITIES_SUCCESS,
    ACTION_INIT_LOCALITIES_FAILURE,

    ACTION_LOCALITIES_SELECT_START,
    ACTION_LOCALITIES_SELECT_SUCCESS,
    ACTION_LOCALITIES_SELECT_FAILURE
} from '@/actionTypes/typeBranch'
import iMenu from '@/interfaces/iMenu'
import { iLocalities, LocalitiesType } from '@/interfaces/iBranch'

import {
    apiBranchAll,
    apiBranchId,
    apiBranchLocality,
    apiBranchLocator,
    apiBranchTypes,
    apiLocalities
} from '@/api/apiBranch'

export const actionMenuBranch = (loading: boolean, value: iMenu[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_MENU_BRANCH_START })

    try {
        dispatch({
            type: ACTION_MENU_BRANCH_SUCCESS,
            payload: value,
            loading
        })
    } catch (error) {
        dispatch({
            type: ACTION_MENU_BRANCH_FAILURE,
            error
        })
    }
}

export const actionBranchAll = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_BRANCH_START })

    apiBranchAll()
        .then(payload => {
            sessionStorage.setItem('branch', JSON.stringify(payload))
            dispatch({
                type: ACTION_BRANCH_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_BRANCH_FAILURE,
            error
        }))
}

export const actionBranchArray = (value: string[]) => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_BRANCH_START })

    if (value.length >= 2) {
        apiBranchLocator({ location: value.join(',') }).then(payload => {
            sessionStorage.setItem('branch', JSON.stringify(payload))
            sessionStorage.setItem('location', JSON.stringify({ location: value.join(',') }))
            dispatch({
                type: ACTION_LOCATION_SUCCESS,
                payload: { location: value.join(',') }
            })
            dispatch({
                type: ACTION_BRANCH_SUCCESS,
                payload
            })
        }).catch(error => dispatch({
            type: ACTION_BRANCH_FAILURE,
            error
        }))
    } else if (value.length === 1 && !isNaN(+value[0])) {
        apiBranchId(+value[0]).then(payload => {
            sessionStorage.setItem('branch', JSON.stringify(payload))
            sessionStorage.setItem('location', JSON.stringify({ location: value.join(',') }))
            dispatch({
                type: ACTION_LOCATION_SUCCESS,
                payload: { location: value.join(',') }
            })
            dispatch({
                type: ACTION_BRANCH_SUCCESS,
                payload
            })
        }).catch(error => dispatch({
            type: ACTION_BRANCH_FAILURE,
            error
        }))
    } else if (value.length === 1) {
        apiBranchLocality({ location: value[0] }).then(payload => {
            sessionStorage.setItem('branch', JSON.stringify(payload))
            sessionStorage.setItem('location', JSON.stringify({ location: value.join(',') }))
            dispatch({
                type: ACTION_LOCATION_SUCCESS,
                payload: { location: value.join(',') }
            })
            dispatch({
                type: ACTION_BRANCH_SUCCESS,
                payload
            })
        }).catch(error => dispatch({
            type: ACTION_BRANCH_FAILURE,
            error
        }))
    }
}

export const actionInitBranch = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_BRANCH_START })

    try {
        dispatch({
            type: ACTION_INIT_BRANCH_SUCCESS,
            payload: JSON.parse(sessionStorage.getItem('branch') as string)
        })
    } catch (error) {
        dispatch({
            type: ACTION_INIT_BRANCH_FAILURE,
            error
        })
    }
}

export const actionBranchTypes = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_BRANCH_TYPES_START })

    apiBranchTypes()
        .then(payload => {
            sessionStorage.setItem('branchTypes', JSON.stringify(payload))
            dispatch({
                type: ACTION_BRANCH_TYPES_SUCCESS,
                payload
            })
        })
        .catch(error => dispatch({
            type: ACTION_BRANCH_TYPES_FAILURE,
            error
        }))
}

export const actionInitBranchTypes = () => async (dispatch: Dispatch) => {
    dispatch({ type: ACTION_INIT_BRANCH_TYPES_START })

    try {
        dispatch({
            type: ACTION_INIT_BRANCH_TYPES_SUCCESS,
            payload: JSON.parse(sessionStorage.getItem('branchTypes') as string)
        })
    } catch (error) {
        dispatch({
            type: ACTION_INIT_BRANCH_TYPES_FAILURE,
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