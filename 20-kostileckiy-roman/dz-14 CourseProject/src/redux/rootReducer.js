import {combineReducers} from "redux";
import {calcaculate} from "./Calculate";
import {header} from "./headerReduser";
import {carousel} from "./CarouselReducer";
import {tabsAndPartner} from "./tabsAndPartnerReduser";
import {Link} from './LinkReduser'
import {Footer} from "./footerReducer";


export const rootReducer = combineReducers({
    Calculate: calcaculate,
    Header:header,
    Carousel:carousel,
    TabsAndPartner:tabsAndPartner,
    Links:Link,
    Footer:Footer
})