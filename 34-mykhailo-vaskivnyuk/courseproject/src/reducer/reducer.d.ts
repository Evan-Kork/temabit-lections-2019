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

    interface ActionResponse extends Action {
        data: Data.BranchesData | Data.LocalitiesData,
    }
}
