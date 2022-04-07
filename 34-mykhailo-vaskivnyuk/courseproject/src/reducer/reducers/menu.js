function menu(state = {}, action) {
	switch (action.type) {
		case "SET_SELECTED_MENU":
			const menuList = state.list;
			const index = menuList.findIndex(item => 
				("/" + item.link) == action.data ? true : false 
			);
			const selected = menuList[index] ? menuList[index] : null;
			state = Object.assign({}, state, { selected });
			break;
		default:	
	}
	return state;
}

export default menu;
