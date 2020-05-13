import Locations from "../resources/ico-location.png";
import Calculator from "../resources/ico-calculator.png";

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
    }
}
export const tabsAndPartner = (state = initialState, action) =>{
    return state
}