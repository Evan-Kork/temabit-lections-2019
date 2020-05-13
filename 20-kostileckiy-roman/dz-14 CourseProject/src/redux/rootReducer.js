import {combineReducers} from "redux";
import {calcaculate} from "./Calculate";
import {header} from "./headerReduser";


export const rootReducer = combineReducers({
    Calculate: calcaculate,
    Header:header
})