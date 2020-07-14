function responses<R extends Data.Response>(state: Data.Responses, action: Reducer.ActionResponse<R>): Data.Responses | {} {
    if (!state) return {};
    switch (action.type) {
        case "SET_BRANCHES":
            state = Object.assign(
                {},
                state,
                { branches: action.data }
            );
            break;
        case "SET_LOCALITIES":
                state = Object.assign(
                    {},
                    state,
                    { localities: action.data }
                );
                break;
        default:
    }
    return state;
}

export default responses;
