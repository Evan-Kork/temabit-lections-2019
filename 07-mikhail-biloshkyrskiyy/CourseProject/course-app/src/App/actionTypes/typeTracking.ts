import iMenu from '@/interfaces/iMenu'
import { iTracking, iDeclaration} from '@/interfaces/iTracking'

export const ACTION_MENU_TRACKING_START = 'ACTION_MENU_TRACKING_START'
export const ACTION_MENU_TRACKING_SUCCESS = 'ACTION_MENU_TRACKING_SUCCESS'
export const ACTION_MENU_TRACKING_FAILURE = 'ACTION_MENU_TRACKING_FAILURE'

export const ACTION_DECLARATION_SUCCESS = 'ACTION_DECLARATION_SUCCESS'

export const ACTION_TRACKING_START   = 'ACTION_TRACKING_START'
export const ACTION_TRACKING_SUCCESS = 'ACTION_TRACKING_SUCCESS'
export const ACTION_TRACKING_FAILURE = 'ACTION_TRACKING_FAILURE'
export const ACTION_INIT_TRACKING_START = 'ACTION_INIT_TRACKING_START'
export const ACTION_INIT_TRACKING_SUCCESS = 'ACTION_INIT_TRACKING_SUCCESS'
export const ACTION_INIT_TRACKING_FAILURE = 'ACTION_INIT_TRACKING_FAILURE'

export const ACTION_TRACKING_HISTORY_START   = 'ACTION_TRACKING_HISTORY_START'
export const ACTION_TRACKING_HISTORY_SUCCESS = 'ACTION_TRACKING_HISTORY_SUCCESS'
export const ACTION_TRACKING_HISTORY_FAILURE = 'ACTION_TRACKING_HISTORY_FAILURE'
export const ACTION_INIT_TRACKING_HISTORY_START = 'ACTION_INIT_TRACKING_HISTORY_START'
export const ACTION_INIT_TRACKING_HISTORY_SUCCESS = 'ACTION_INIT_TRACKING_HISTORY_SUCCESS'
export const ACTION_INIT_TRACKING_HISTORY_FAILURE = 'ACTION_INIT_TRACKING_HISTORY_FAILURE'

export interface iMenuTrackingAction {
    type: typeof ACTION_MENU_TRACKING_SUCCESS
    payload: iMenu[]
}

export interface iDeclarationAction {
    type: typeof ACTION_DECLARATION_SUCCESS
    payload: iDeclaration
}

export interface iTrackingAction {
    type: typeof ACTION_TRACKING_SUCCESS
    payload: iTracking[]
}
export interface iInitTrackingAction {
    type: typeof ACTION_INIT_TRACKING_SUCCESS
    payload: iTracking[]
}

export interface iTrackingHistoryAction {
    type: typeof ACTION_TRACKING_SUCCESS
    payload: iTracking[]
}
export interface iInitTrackingHistoryAction {
    type: typeof ACTION_INIT_TRACKING_SUCCESS
    payload: iTracking[]
}