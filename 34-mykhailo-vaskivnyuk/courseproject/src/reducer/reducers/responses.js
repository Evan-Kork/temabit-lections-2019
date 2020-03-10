function responses(state = {}, action) {
	switch (action.type) {
		case "SET_BRANCHES":
			state = Object.assign(
				{},
				state,
				{ branches: action.data }
			);
			break;
		case "SET_LOCALITIES":
				state = Object.assign(
					{},
					state,
					{ localities: action.data }
				);
				break;
		default:
	}
	return state;
}

export default responses;
