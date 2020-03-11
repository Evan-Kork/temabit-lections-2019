import {
    ACTION_LOCALITIES_SUCCESS,
    iLocalitiesAction,

    ACTION_INIT_LOCALITIES_SUCCESS,
    iInitLocalitiesAction
} from '@/actionTypes/typeBranch'

const initialState = {}

type Action = iLocalitiesAction & iInitLocalitiesAction
export default (state = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_LOCALITIES_SUCCESS:
            return action.payload
        case ACTION_INIT_LOCALITIES_SUCCESS:
            return action.payload
        default:
            return state
    }
}