import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";

import setting from "./reducer-setting";
import branches from "./reducer-branches";
import branches_locator from "./reducer-branches_locator";
import branch_types from "./reducer-branch_types";
import services from "./reducer-services";
import tracking from "./reducer-tracking";
import tracking_history from "./reducer-tracking_history";
import localities from "./reducer-localities";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    setting,
    branches,
    branches_locator,
    branch_types,
    services,
    tracking,
    tracking_history,
    localities
});

export default createRootReducer;
