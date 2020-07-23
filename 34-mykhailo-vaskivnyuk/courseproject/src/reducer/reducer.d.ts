declare namespace Reducer {
    interface Action {
        type: string,
        data: any,
    }

    type SetTest = (test: string) => Reducer.ActionTest;

    interface ActionTest extends Action {
        type: "SET_TEST",
        data: string,
    }

    type SetMenu = (path: string) => Reducer.ActionMenu;

    interface ActionMenu extends Action {
        type: "SET_SELECTED_MENU",
        data: string,
    }

    type SetResponse<R extends Data.Response = Data.Response> =
        (req: string, res: R) => Reducer.ActionResponse;

    interface ActionResponse extends Action {
        data: Data.Response,
    }
}
