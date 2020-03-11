import iMenu from '@/interfaces/iMenu'
import { iBranch, iLocation, iFormat, iLocalities } from '@/interfaces/iBranch'

export const ACTION_MENU_BRANCH_START = 'ACTION_MENU_BRANCH_START'
export const ACTION_MENU_BRANCH_SUCCESS = 'ACTION_MENU_BRANCH_SUCCESS'
export const ACTION_MENU_BRANCH_FAILURE = 'ACTION_MENU_BRANCH_FAILURE'

export const ACTION_LOCATION_SUCCESS = 'ACTION_LOCATION_SUCCESS'

export const ACTION_BRANCH_START   = 'ACTION_BRANCH_START'
export const ACTION_BRANCH_SUCCESS = 'ACTION_BRANCH_SUCCESS'
export const ACTION_BRANCH_FAILURE = 'ACTION_BRANCH_FAILURE'

export const ACTION_INIT_BRANCH_START   = 'ACTION_INIT_BRANCH_START'
export const ACTION_INIT_BRANCH_SUCCESS = 'ACTION_INIT_BRANCH_SUCCESS'
export const ACTION_INIT_BRANCH_FAILURE = 'ACTION_INIT_BRANCH_FAILURE'

export const ACTION_BRANCH_TYPES_START   = 'ACTION_BRANCH_TYPES_START'
export const ACTION_BRANCH_TYPES_SUCCESS = 'ACTION_BRANCH_TYPES_SUCCESS'
export const ACTION_BRANCH_TYPES_FAILURE = 'ACTION_BRANCH_TYPES_FAILURE'

export const ACTION_INIT_BRANCH_TYPES_START   = 'ACTION_INIT_BRANCH_TYPES_START'
export const ACTION_INIT_BRANCH_TYPES_SUCCESS = 'ACTION_INIT_BRANCH_TYPES_SUCCESS'
export const ACTION_INIT_BRANCH_TYPES_FAILURE = 'ACTION_INIT_BRANCH_TYPES_FAILURE'

export const ACTION_LOCALITIES_START   = 'ACTION_LOCALITIES_START'
export const ACTION_LOCALITIES_SUCCESS = 'ACTION_LOCALITIES_SUCCESS'
export const ACTION_LOCALITIES_FAILURE = 'ACTION_LOCALITIES_FAILURE'

export const ACTION_INIT_LOCALITIES_START   = 'ACTION_INIT_LOCALITIES_START'
export const ACTION_INIT_LOCALITIES_SUCCESS = 'ACTION_INIT_LOCALITIES_SUCCESS'
export const ACTION_INIT_LOCALITIES_FAILURE = 'ACTION_INIT_LOCALITIES_FAILURE'

export const ACTION_LOCALITIES_SELECT_START   = 'ACTION_LOCALITIES_SELECT_START'
export const ACTION_LOCALITIES_SELECT_SUCCESS = 'ACTION_LOCALITIES_SELECT_SUCCESS'
export const ACTION_LOCALITIES_SELECT_FAILURE = 'ACTION_LOCALITIES_SELECT_FAILURE'

export interface iMenuBranchAction {
    type: typeof ACTION_MENU_BRANCH_SUCCESS
    payload: iMenu[]
}

export interface iLocationAction {
    type: typeof ACTION_LOCATION_SUCCESS
    payload: iLocation
}

export interface iBranchAction {
    type: typeof ACTION_BRANCH_SUCCESS
    payload: iBranch[]
}
export interface iInitBranchAction {
    type: typeof ACTION_INIT_BRANCH_SUCCESS
    payload: iBranch[]
}

export interface iBranchTypesAction {
    type: typeof ACTION_BRANCH_TYPES_SUCCESS
    payload: iFormat[]
}

export interface iInitBranchTypesAction {
    type: typeof ACTION_INIT_BRANCH_SUCCESS
    payload: iFormat[]
}

export interface iLocalitiesAction {
    type: typeof ACTION_LOCALITIES_SUCCESS
    payload: iLocalities[]
}

export interface iInitLocalitiesAction {
    type: typeof ACTION_INIT_LOCALITIES_SUCCESS
    payload: iLocalities[]
}

export interface iLocalitiesSelectAction {
    type: typeof ACTION_LOCALITIES_SELECT_SUCCESS
    payload: iLocalities[]
}