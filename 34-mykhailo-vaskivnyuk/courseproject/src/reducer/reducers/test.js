function test(state = {}, action) {
	switch (action.type) {
		case "SET_TEST":
			state = action.data;
			console.log("SET_TEST : " + action.data);
			break;
		default:
	}
	return state;
}

export default test;
