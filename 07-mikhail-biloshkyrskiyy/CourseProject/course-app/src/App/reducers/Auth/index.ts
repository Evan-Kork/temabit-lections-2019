import {
    ACTION_LOGIN_SUCCESS,
    iLoginAction,

    ACTION_INIT_LOGIN_SUCCESS,
    iInitLoginAction,

    ACTION_RELOADING_TOKEN_SUCCESS,
    iReloadingToken,

    ACTION_LOGOUT,
    iLogoutAction
} from '@/actionTypes/typeAuth'

const initialState = {
    user: {},
    result: {},
    token: {}
}

type Action = iLoginAction & iInitLoginAction & iLogoutAction & iReloadingToken
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case ACTION_INIT_LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case ACTION_RELOADING_TOKEN_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case ACTION_LOGOUT:
            return {
                user: {},
                result: {},
                token: {}
            }
        default:
            return state
    }
}