function test(state: string = "", action: Reducer.ActionTest): string {
    switch (action.type) {
        case ACTION.SET_TEST:
            state = action.data;
            console.log("SET_TEST : " + action.data);
            break;
        default:
    }
    return state;
}

export default test;
