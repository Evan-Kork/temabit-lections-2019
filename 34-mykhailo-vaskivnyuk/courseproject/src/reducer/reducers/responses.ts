import { plainToClass } from "class-transformer";
import { Locality } from '../../data/classes';

function responses(state: Data.Responses, action: Reducer.ActionResponse): Data.Responses | {} {
    if (!state) return {};

    switch (action.type) {
        case "SET_BRANCHES":
            state = Object.assign(
                {},
                state,
                { branches: action.data },
            );
            break;
        case "SET_LOCALITIES":
            const { data, error } = action.data;
            const localities = plainToClass(Locality, data);
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
