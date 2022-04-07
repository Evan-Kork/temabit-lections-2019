import { combineReducers } from "redux";
import menu from "./reducers/menu";
import test from "./reducers/test";
import responses from "./reducers/responses";

const reducer = combineReducers({ menu, test, responses });

export default reducer;
