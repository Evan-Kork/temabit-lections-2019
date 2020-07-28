declare namespace Reducer {
    interface Action {
        type: ACTION,
        data: any,
    }

    type SetTest = (test: string) => Reducer.ActionTest;

    interface ActionTest extends Action {
        type: ACTION.SET_TEST,
        data: string,
    }

    type SetMenu = (path: string) => Reducer.ActionMenu;

    interface ActionMenu extends Action {
        type: ACTION.SET_SELECTED_MENU,
        data: string,
    }

    type SetResponse<R extends Data.Response = Data.Response> =
        (req: string, res: R) => Reducer.ActionResponse;

    interface ActionResponse extends Action {
        type: ACTION.SET_BRANCHES | ACTION.SET_LOCALITIES
        data: Data.Response,
    }
}

declare const enum ACTION {
    SET_BRANCHES = "SET_BRANCHES",
    SET_LOCALITIES = "SET_LOCALITIES",
    SET_TEST = "SET_TEST",
    SET_SELECTED_MENU = "SET_SELECTED_MENU",
}
