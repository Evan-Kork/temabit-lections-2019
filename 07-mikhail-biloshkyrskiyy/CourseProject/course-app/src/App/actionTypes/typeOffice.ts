import iMenu from '@/interfaces/iMenu'
import { iOffice, iLocation, iFormat, iLocalities } from '@/interfaces/iOffice'

export const ACTION_MENU_OFFICE_START = 'ACTION_MENU_OFFICE_START'
export const ACTION_MENU_OFFICE_SUCCESS = 'ACTION_MENU_OFFICE_SUCCESS'
export const ACTION_MENU_OFFICE_FAILURE = 'ACTION_MENU_OFFICE_FAILURE'

export const ACTION_LOCATION_SUCCESS = 'ACTION_LOCATION_SUCCESS'

export const ACTION_OFFICE_START   = 'ACTION_OFFICE_START'
export const ACTION_OFFICE_SUCCESS = 'ACTION_OFFICE_SUCCESS'
export const ACTION_OFFICE_FAILURE = 'ACTION_OFFICE_FAILURE'

export const ACTION_INIT_OFFICE_START   = 'ACTION_INIT_OFFICE_START'
export const ACTION_INIT_OFFICE_SUCCESS = 'ACTION_INIT_OFFICE_SUCCESS'
export const ACTION_INIT_OFFICE_FAILURE = 'ACTION_INIT_OFFICE_FAILURE'

export const ACTION_OFFICE_TYPES_START   = 'ACTION_OFFICE_TYPES_START'
export const ACTION_OFFICE_TYPES_SUCCESS = 'ACTION_OFFICE_TYPES_SUCCESS'
export const ACTION_OFFICE_TYPES_FAILURE = 'ACTION_OFFICE_TYPES_FAILURE'

export const ACTION_INIT_OFFICE_TYPES_START   = 'ACTION_INIT_OFFICE_TYPES_START'
export const ACTION_INIT_OFFICE_TYPES_SUCCESS = 'ACTION_INIT_OFFICE_TYPES_SUCCESS'
export const ACTION_INIT_OFFICE_TYPES_FAILURE = 'ACTION_INIT_OFFICE_TYPES_FAILURE'

export const ACTION_LOCALITIES_START   = 'ACTION_LOCALITIES_START'
export const ACTION_LOCALITIES_SUCCESS = 'ACTION_LOCALITIES_SUCCESS'
export const ACTION_LOCALITIES_FAILURE = 'ACTION_LOCALITIES_FAILURE'

export const ACTION_INIT_LOCALITIES_START   = 'ACTION_INIT_LOCALITIES_START'
export const ACTION_INIT_LOCALITIES_SUCCESS = 'ACTION_INIT_LOCALITIES_SUCCESS'
export const ACTION_INIT_LOCALITIES_FAILURE = 'ACTION_INIT_LOCALITIES_FAILURE'

export const ACTION_LOCALITIES_SELECT_START   = 'ACTION_LOCALITIES_SELECT_START'
export const ACTION_LOCALITIES_SELECT_SUCCESS = 'ACTION_LOCALITIES_SELECT_SUCCESS'
export const ACTION_LOCALITIES_SELECT_FAILURE = 'ACTION_LOCALITIES_SELECT_FAILURE'

export interface iMenuOfficeAction {
    type: typeof ACTION_MENU_OFFICE_SUCCESS
    payload: iMenu[]
}

export interface iLocationAction {
    type: typeof ACTION_LOCATION_SUCCESS
    payload: iLocation
}

export interface iOfficeAction {
    type: typeof ACTION_OFFICE_SUCCESS
    payload: iOffice[]
}
export interface iInitOfficeAction {
    type: typeof ACTION_INIT_OFFICE_SUCCESS
    payload: iOffice[]
}

export interface iOfficeTypesAction {
    type: typeof ACTION_OFFICE_TYPES_SUCCESS
    payload: iFormat[]
}

export interface iInitOfficeTypesAction {
    type: typeof ACTION_INIT_OFFICE_SUCCESS
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