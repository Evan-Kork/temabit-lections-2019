export function setTest(test) {
	return {
		type: "SET_TEST",
		data: test
	}
}

export function setMenu(menuItem) {
	return {
		type: "SET_SELECTED_MENU",
		data: menuItem
	}
}

export function setResponse(req, res) {
	return {
		type: "SET_" + req.toUpperCase(),
		data: res
	}
}
