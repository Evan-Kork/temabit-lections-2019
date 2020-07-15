import * as Data from "../../data/data.types";
import Reducer from "../reducer.d";

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

export function setResponse<R extends Data.Response>(req: string, res: R): Reducer.ActionResponse<R> {
    return {
        type: "SET_" + req.toUpperCase(),
        data: res,
    }
}
