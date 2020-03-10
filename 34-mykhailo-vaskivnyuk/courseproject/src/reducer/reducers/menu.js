function menu(state = {}, action) {
    switch (action.type) {
        case "SET_SELECTED_MENU":
			const menuList = state.list;
			const index = menuList.findIndex(item => 
				("/" + item.link) == action.data ? true : false 
			);
			//console.log(index);
			const selected = menuList[index] ? menuList[index] : null;
            state = Object.assign({}, state, { selected });
            console.log("SET_SELECTED_MENU : " + action.data);
            break;
		default:	
    }
    return state;
}

export default menu;

// function getSelected(path) {
// 	dev_log(path);
// 	const menuList = this.props.menuList;
// 	const index = menuList.findIndex(item => 
// 		("/" + item.link) == path ? true : false 
// 	);
// 	if (menuList[index])
// 		return menuList[index].id;
// 	return null;
// }