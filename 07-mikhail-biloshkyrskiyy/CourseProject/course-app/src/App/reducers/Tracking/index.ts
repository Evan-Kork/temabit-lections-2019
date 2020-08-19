import {
    ACTION_TRACKING_SUCCESS,
    iTrackingAction,

    ACTION_INIT_TRACKING_SUCCESS,
    iInitTrackingAction,

    ACTION_TRACKING_HISTORY_SUCCESS,
    iTrackingHistoryAction,

    ACTION_INIT_TRACKING_HISTORY_SUCCESS,
    iInitTrackingHistoryAction,

    ACTION_DECLARATION_SUCCESS,
    iDeclarationAction
} from '@/actionTypes/typeTracking'

const initialState = {
    tracking: {},
    declaration: {},
    trackingHistory: {}
}

export default (state = initialState, action: iTrackingAction & iInitTrackingAction) => {
    switch (action.type) {
        case ACTION_TRACKING_SUCCESS:
            return {
                ...state,
                tracking: action.payload
            }
        case ACTION_INIT_TRACKING_SUCCESS:
            return {
                ...state,
                tracking: action.payload
            }
        case ACTION_DECLARATION_SUCCESS:
            return {
                ...state,
                declaration: action.payload
            }
        case ACTION_TRACKING_HISTORY_SUCCESS:
            return {
                ...state,
                trackingHistory: action.payload
            }
        case ACTION_INIT_TRACKING_HISTORY_SUCCESS:
            return {
                ...state,
                trackingHistory: action.payload
            }
        default:
            return state
    }
}