import logo from '../resources/logo_new.png';
import InternationalDelivery from '../resources/Knopka_Mignarodna_DOSTAVKA.png'
import Cabinet from '../resources/KABINET.png'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const initialState = {
    JUSTIN_LOGO:{
        IMG:logo,
        TEXT:"Justin",
        LINK:"/"
    },
    INTERNATIONAL_DELIVERY :{
        IMG:InternationalDelivery,
        TEXT:"Международная доставка",
        LINK:"/"
    },
    CABINET:{
        IMG:Cabinet,
        TEXT:"Кабинет",
        LINK:"/"
    },
    CONTACT:{
        TEL:"0-800-301-661",
        LINK:"tel:0-800-301-661"
    },
    FORM:{
        TYPE:"text",
        PLACEHOLDER:"Номер отправки"
    },
    ICON_FA_BARS:faBars
}

export const header = (state = initialState, action) =>{
    return state
}