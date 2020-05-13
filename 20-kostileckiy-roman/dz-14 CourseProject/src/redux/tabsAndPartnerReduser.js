import Locations from "../resources/ico-location.png";
import Calculator from "../resources/ico-calculator.png";
import partners from '../resources/partners.png';

const initialState = {
    LOCATION:{
        TITLE:"Наші відділення",
        IMG:Locations,
        TEXT:"Наші відділення",
        LINK:"/",
        BTN_TEXT:"ЗНАЙТИ"
    },
    CALCULATOR:{
        IMG:Calculator,
        TEXT:"Калькулятор",
        LINK:"/tracker",
        BTN_TEXT:"РОЗРАХУВАТИ ВАРТІСТЬ ВІДПРАВЛЕННЯ"
    },
    PARTNERS:{
        IMG:partners,
        TEXT:"Партнери",
    }
}
export const tabsAndPartner = (state = initialState, action) =>{
    return state
}