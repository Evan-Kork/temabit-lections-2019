export const setTest: Reducer.SetTest = (test) => ({
    type: ACTION.SET_TEST,
    data: test,
});

export const setMenu: Reducer.SetMenu = (path) => ({
    type: ACTION.SET_SELECTED_MENU,
    data: path,
});

export const setResponse: Reducer.SetResponse = (req, res) => ({
    type: ("SET_" + req.toUpperCase()) as (ACTION.SET_BRANCHES | ACTION.SET_LOCALITIES),
    data: res,
});
