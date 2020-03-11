import {
    ACTION_LOCALITIES_SELECT_SUCCESS,
    iLocalitiesSelectAction
} from '@/actionTypes/typeBranch'

const initialState = {}

export default (state = initialState, action: iLocalitiesSelectAction) => {
    switch (action.type) {
        case ACTION_LOCALITIES_SELECT_SUCCESS:
            return action.payload
        default:
            return state
    }
}