import {
  EDIT_DEPARTMENTS_SEARCH,
  TOOGLE_SEARCH_CLOSEST,
  TOOGLE_HISTORY_TTN,
  TOOGLE_SIDEBAR,
} from '../../actions/actions';

const initialState = {
  searchDepartment: '',
  isShowHistory: false,
  isOnlyClosest: false,
  isSidebarOpen: false
};

const common = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case EDIT_DEPARTMENTS_SEARCH:
      newState.searchDepartment = action.data;
      return newState;
    case TOOGLE_SEARCH_CLOSEST:
      newState.isOnlyClosest = !newState.isOnlyClosest;
      return newState;
    case TOOGLE_HISTORY_TTN:
      newState.isShowHistory = !newState.isShowHistory;
      return newState;
    case TOOGLE_SIDEBAR:
      newState.isSidebarOpen = !newState.isSidebarOpen;
      return newState;
    default:
      return state;
  }
};

export default common;
