import {
    ACTION_MENU_SUCCESS,
    iMenuAction
} from '@/actionTypes/typeMenu'

const initialState = {
    loading: false
}

export default (state = initialState, action: iMenuAction) => {
    switch (action.type) {
        case ACTION_MENU_SUCCESS:
            return action.payload
        default:
            return state
    }
}