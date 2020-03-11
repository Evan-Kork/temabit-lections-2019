import {
    ACTION_TRACKING_HISTORY_SUCCESS,
    iTrackingHistoryAction,

    ACTION_INIT_TRACKING_HISTORY_SUCCESS,
    iInitTrackingHistoryAction
} from '@/actionTypes/typeTracking'

const initialState = {}

export default (state = initialState, action: iTrackingHistoryAction & iInitTrackingHistoryAction) => {
    switch (action.type) {
        case ACTION_TRACKING_HISTORY_SUCCESS:
            return action.payload
        case ACTION_INIT_TRACKING_HISTORY_SUCCESS:
            return action.payload
        default:
            return state
    }
}