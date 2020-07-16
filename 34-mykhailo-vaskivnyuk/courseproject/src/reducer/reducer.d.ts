declare namespace Reducer {
    interface Action {
        type: string,
    }

    interface ActionTest extends Action {
        data: string,
    }

    interface ActionMenu extends Action {
        data: string,
    }

    interface ActionResponse<R extends Data.Response> extends Action {
        data: R,
    }
}
