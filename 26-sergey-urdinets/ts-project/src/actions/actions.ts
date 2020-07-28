/*
 * action types
 */

export enum Actions {
  EDIT_DEPARTMENTS_SEARCH = 'EDIT_DEPARTMENTS_SEARCH', 
  TOOGLE_SEARCH_CLOSEST= 'TOOGLE_SEARCH_CLOSEST', 
  TOOGLE_HISTORY_TTN = 'TOOGLE_HISTORY_TTN', 
  TOOGLE_SIDEBAR = 'TOOGLE_SIDEBAR'
}

/*
 * action creators
 */

export interface EditSearchDepartmentData {
  type: typeof Actions.EDIT_DEPARTMENTS_SEARCH
  data?: string
}
export interface ToogleSearchClosest {
  type: typeof Actions.TOOGLE_SEARCH_CLOSEST
}
export interface ToogleHistoryTtn {
  type: typeof Actions.TOOGLE_HISTORY_TTN
}
export interface ToogleSidebar {
  type: typeof Actions.TOOGLE_SIDEBAR
}

export type ActionTypes = EditSearchDepartmentData | ToogleSearchClosest | ToogleHistoryTtn | ToogleSidebar

export function editSearchDepartmentData(data: string) : ActionTypes {
  return { type: Actions.EDIT_DEPARTMENTS_SEARCH, data };
}

export function toogleSearchClosest() : ActionTypes {
  return { type: Actions.TOOGLE_SEARCH_CLOSEST };
}

export function toogleHistoryTtn() : ActionTypes {
  return { type: Actions.TOOGLE_HISTORY_TTN };
}

export function toogleSidebar() : ActionTypes {
  return { type: Actions.TOOGLE_SIDEBAR };
}

