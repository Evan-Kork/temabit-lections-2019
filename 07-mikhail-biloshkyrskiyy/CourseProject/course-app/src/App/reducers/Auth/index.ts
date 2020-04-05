import {
    ACTION_LOGIN_SUCCESS,
    iLoginAction,

    ACTION_LOGOUT,
    iLogoutAction
} from '@/actionTypes/typeAuth'

const initialState = {
    user: {}
}

type Action = iLoginAction & iLogoutAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case ACTION_LOGOUT:
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}