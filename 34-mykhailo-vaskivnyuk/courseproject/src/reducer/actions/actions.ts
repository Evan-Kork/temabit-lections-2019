export const setTest: Reducer.SetTest = (test) => ({
    type: "SET_TEST",
    data: test,
});

export const setMenu: Reducer.SetMenu = (path) => ({
    type: "SET_SELECTED_MENU",
    data: path,
});

export const setResponse: Reducer.SetResponse = (req, res) => ({
    type: "SET_" + req.toUpperCase(),
    data: res,
});
