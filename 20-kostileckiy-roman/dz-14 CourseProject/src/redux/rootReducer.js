import {combineReducers} from "redux";
import {calcaculate} from "./Calculate";

export const rootReducer = combineReducers({
    CalculateCostSending: calcaculate
})