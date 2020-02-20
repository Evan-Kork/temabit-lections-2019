const userItem = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return { ...action.data };
    default:
      return state
  }
}

export default userItem;