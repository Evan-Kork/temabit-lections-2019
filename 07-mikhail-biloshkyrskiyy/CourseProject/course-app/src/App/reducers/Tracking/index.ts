import {
    ACTION_TRACKING_SUCCESS,
    iTrackingAction,

    ACTION_INIT_TRACKING_SUCCESS,
    iInitTrackingAction
} from '@/actionTypes/typeTracking'

const initialState = {}

export default (state = initialState, action: iTrackingAction & iInitTrackingAction) => {
    switch (action.type) {
        case ACTION_TRACKING_SUCCESS:
            return action.payload
        case ACTION_INIT_TRACKING_SUCCESS:
            return action.payload
        default:
            return state
    }
}