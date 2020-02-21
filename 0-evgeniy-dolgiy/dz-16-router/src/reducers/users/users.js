const initialState = {
  list: [
    {
      id: 1,
      name: 'Evgeniy1',
      surname: 'Dolgiy1'
    },
    {
      id: 2,
      name: 'Evgeniy2',
      surname: 'Dolgiy2'
    },
    {
      id: 3,
      name: 'Evgeniy3',
      surname: 'Dolgiy3'
    },
    {
      id: 4,
      name: 'Evgeniy4',
      surname: 'Dolgiy4'
    }
  ],
  selectedItem: null,
  editMode: false
};

const users = (state = initialState, action) => {
  // let newState = Object.assign({}, state);
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'SET_ITEM':
      newState.selectedItem = newState.list[action.data];
      return newState;
    case 'SET_ITEM_BY_ID':
      for (let i = 0; i < newState.list.length; i++) {
        if (newState.list[i].id === +action.data) {
          console.log('action.data', action);
          // newState.selectedItem = Object.assign({}, newState.list[i]);
          newState.selectedItem = {...newState.list[i]};
          break;
        }
      }
      // newState.selectedItem = ;
      return newState;
    case 'SET_ITEM_EDIT_BY_ID':
      console.log('SET_ITEM_EDIT_BY_ID');
      for (let i = 0; i < newState.list.length; i++) {
        if (newState.list[i].id === +action.data) {
          console.log('action.data', action);
          // newState.selectedItem = Object.assign({}, newState.list[i]);
          newState.selectedItem = {...newState.list[i]};
          newState.editMode = true;
          break;
        }
      }
      // newState.selectedItem = ;
      return newState;
    case 'SAVE_ITEM':
      for (let i = 0; i < newState.list.length; i++) {
        if (newState.list[i].id === action.data.id) {
          newState.list[i] = JSON.parse(JSON.stringify(action.data));
          newState.selectedItem = JSON.parse(JSON.stringify(action.data));
          break;
        }
      }
      console.log('newState', newState, state);
      return newState;
    case 'EDIT_ITEM_CHANGE':
      newState.editMode = !newState.editMode;
      return newState;
    default:
      return state
  }
}

export default users;