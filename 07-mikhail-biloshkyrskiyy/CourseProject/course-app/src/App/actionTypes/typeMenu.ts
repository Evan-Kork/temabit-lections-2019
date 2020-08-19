import iMenu from '@/interfaces/iMenu'

export const ACTION_MENU_START   = 'ACTION_MENU_START'
export const ACTION_MENU_SUCCESS = 'ACTION_MENU_SUCCESS'
export const ACTION_MENU_FAILURE = 'ACTION_MENU_FAILURE'

export interface iMenuAction {
    type: typeof ACTION_MENU_SUCCESS
    payload: iMenu
}