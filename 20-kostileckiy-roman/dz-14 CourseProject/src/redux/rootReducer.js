import {combineReducers} from "redux";
import {calcaculate} from "./Calculate";
import {header} from "./headerReduser";
import {carousel} from "./CarouselReducer";


export const rootReducer = combineReducers({
    Calculate: calcaculate,
    Header:header,
    Carousel:carousel
})