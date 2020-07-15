import * as Data from "../data/data.types";

export interface Action {
    type: string,
}

export interface ActionTest extends Action {
    data: string,
}

export interface ActionMenu extends Action {
    data: string,
}

export interface ActionResponse<R extends Data.Response> extends Action {
    data: R,
}
