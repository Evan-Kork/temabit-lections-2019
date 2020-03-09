/*
 * action types
 */
export const EDIT_DEPARTMENTS_SEARCH = 'EDIT_DEPARTMENTS_SEARCH';
export const TOOGLE_SEARCH_CLOSEST = 'TOOGLE_SEARCH_CLOSEST';
export const TOOGLE_HISTORY_TTN = 'TOOGLE_HISTORY_TTN';
export const TOOGLE_SIDEBAR = 'TOOGLE_SIDEBAR';

/*
 * action creators
 */
export function editSearchDepartmentData(data) {
  return { type: EDIT_DEPARTMENTS_SEARCH, data };
}

export function toogleSearchClosest() {
  return { type: TOOGLE_SEARCH_CLOSEST };
}

export function toogleHistoryTtn() {
  return { type: TOOGLE_HISTORY_TTN };
}

export function toogleSidebar() {
  return { type: TOOGLE_SIDEBAR };
}
