import {Actions, ActionTypes} from '../actions/actions';

const initialState  = {
  searchDepartment: '',
  isShowHistory: false,
  isOnlyClosest: false,
  isSidebarOpen: false
};

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = (state = initialState, action: ActionTypes) => {
  let newState = { ...state };
  
console.log('old state',newState);


  switch (action.type) {
    case Actions.EDIT_DEPARTMENTS_SEARCH:
      newState.searchDepartment = action.data;
      return newState;
    case Actions.TOOGLE_SEARCH_CLOSEST:
      newState.isOnlyClosest = !newState.isOnlyClosest;
      return newState;
    case Actions.TOOGLE_HISTORY_TTN:
      newState.isShowHistory = !newState.isShowHistory;
      return newState;
    case Actions.TOOGLE_SIDEBAR:
      newState.isSidebarOpen = !newState.isSidebarOpen;
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
