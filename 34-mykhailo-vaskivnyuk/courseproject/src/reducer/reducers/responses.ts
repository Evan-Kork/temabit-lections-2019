import { plainToClass } from "class-transformer";
import * as Data from "../../data/data.types";
import Reducer from "../reducer.d";

function responses<R extends Data.Response>(state: Data.Responses, action: Reducer.ActionResponse<R>): Data.Responses | {} {
    if (!state) return {};

    switch (action.type) {
        case "SET_BRANCHES":
            let { data, error } = action.data;
            const branches = plainToClass(Data.BranchClass, data);
            state = Object.assign(
                {},
                state,
                { branches: { data: branches, error } },
            );
            break;
        case "SET_LOCALITIES":
            ({ data, error } = action.data);
            const localities = plainToClass(Data.Locality, data);
            state = Object.assign(
                {},
                state,
                { localities: { data: localities, error } },
            );
            break;
        default:
    }
    return state;
}

export default responses;
