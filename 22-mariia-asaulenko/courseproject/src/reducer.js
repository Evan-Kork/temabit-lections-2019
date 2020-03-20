
const initialState = {
  isDrawerOpened: false,
}

const reducer = (state = initialState, action) => {

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