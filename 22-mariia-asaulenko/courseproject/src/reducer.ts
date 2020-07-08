import {State} from "../interface"

interface ActionType {
  type: string,
  payload?: {
    [key:string]:any,
  }
}

const initialState:State = {
  isDrawerOpened: false,
}


const reducer = (state:State = initialState, action:ActionType) => {

  switch (action.type) {
    case 'OPEN_DRAWER':
      return { ...state, isDrawerOpened: true };
    case 'CLOSE_DRAWER':
      return { ...state, isDrawerOpened: false };
    default:
      return state;
  }
}

export default reducer