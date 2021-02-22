import Locations from "../resources/ico-location.png";
import Calculator from "../resources/ico-calculator.png";
import partners from '../resources/partners.png';
import RozetkaLogo from '../resources/partners/rozetka_logo.png'
import AutoluxLogo from '../resources/partners/autolux_logo.png'
import FozzyLogo from '../resources/partners/fozzy_logo.png'
import ElmirLogo from '../resources/partners/elmir_logo.png'
import ParfumsLogo from '../resources/partners/parfums_logo.png'
import PromLogo from '../resources/partners/prom_logo.png'
import RingoLogo from '../resources/partners/ringo_logo.png'
import ThrashLogo from '../resources/partners/thrash_logo.png'

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
    },
    MULTICAROUSEL:{
        PARTNERS_LOGO_1:[
            RozetkaLogo,
            AutoluxLogo,
            FozzyLogo,
            ElmirLogo
        ],
        PARTNERS_LOGO_2:[
            ParfumsLogo,
            PromLogo,
            RingoLogo,
            ThrashLogo
        ]
    }
}
export const tabsAndPartner = (state = initialState, action) =>{
    return state
}