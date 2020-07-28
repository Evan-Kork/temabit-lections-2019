function menu(state: Data.Menu, action: Reducer.ActionMenu): Data.Menu | {} {
    if (!state) return {};
    switch (action.type) {
        case ACTION.SET_SELECTED_MENU:
            if (!state.list) break;
            const selected = state.list.find(
                ({ link }) => `/${link}` === action.data
            ) || null;
            state = Object.assign({}, state, { selected });
            break;
        default:
    }
    return state;
}

export default menu;
