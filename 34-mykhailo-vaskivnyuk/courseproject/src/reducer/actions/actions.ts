export function setTest(test: string): Reducer.ActionTest {
	return {
		type: "SET_TEST",
		data: test,
	}
}

export function setMenu(path: string): Reducer.ActionMenu {
	return {
		type: "SET_SELECTED_MENU",
		data: path,
	}
}

export function setResponse(req: string, res: Data.BranchesData | Data.LocalitiesData): Reducer.ActionResponse {
	return {
		type: "SET_" + req.toUpperCase(),
		data: res,
	}
}
