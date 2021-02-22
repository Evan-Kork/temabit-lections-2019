import { faFacebookF, faInstagram, faTelegram, faFacebookMessenger, faViber } from '@fortawesome/free-brands-svg-icons'

const initialState = {
    // LINKS:{
    //     LEFT_SIDE:{
    //         ABOUT_JUSTIN:{
    //             TEXT:"Про Justin",
    //             LINK:"/",
    //             TITLE:"Про Justin"
    //         },
    //         MAP_OF_BRANCHES:{
    //             TEXT:"Карта відділень",
    //             LINK:",",
    //             TITLE: "Карта відділень"
    //         },
    //         LIST_OF_BRANCHES:{
    //             TEXT:"Список відділень",
    //             LINK:"/",
    //             TITLE:"Список відділень"
    //         },
    //         COST_CALCULATION:{
    //             TEXT:"Розрахунок вартості",
    //             LINK:"/",
    //             TITLE:"Розрахунок вартості"
    //         },
    //     },
    //     MIDDLE_SIDE:{
    //         TARIFF:{
    //             TEXT:"Тарифи",
    //             LINK:"/",
    //             TITLE:"Тарифи"
    //         },
    //         CONDITIONS:{
    //             TEXT:"Умови надання послуг",
    //             LINK:"/",
    //             TITLE:"Умови надання послуг"
    //         },
    //         FAQ:{
    //             TEXT:"Умови надання послуг",
    //             LINK:"/",
    //             TITLE:"Питання та відповіді"
    //         },
    //         GET_CONTRACT:{
    //             TEXT:"Укласти договір",
    //             LINK:"/",
    //             TITLE:"Укласти договір"
    //         },
    //     },
    //     RIGHT_SIDE:{
    //         PARTNERS:{
    //             TEXT:"Наші партнери",
    //             LINK:"/",
    //             TITLE:"Наші партнери"
    //         },
    //         CREDIT:{
    //             TEXT:"Кредитні посередники",
    //             LINK:"/",
    //             TITLE:"Кредитні посередники"
    //         },
    //         NEWS:{
    //             TEXT:"Новини",
    //             LINK:"/",
    //             TITLE:"Новини"
    //         },
    //         CONTACTS:{
    //             TEXT:"Контакти",
    //             LUNK:"/",
    //             TITLE:"Контакти"
    //         }
    //     }
    // }
    LINKS:{
        LEFT:["Про Justin","Карта відділень","Список відділень","Розрахунок вартості"],
        MIDDLE:["Тарифи","Умови надання послуг","Питання та відповіді","Укласти договір"],
        RIGHT:["Наші партнери","Кредитні посередники","Новини","Контакти"]
    },
    DOWN_SIDE:{
        ICONS:{
            FACEBOOK:{ICON:faFacebookF,LINK:"/",TITLE:"Facebook"},
            INSTAGFRAM:{ICON:faInstagram,LINK:"/",TITLE:"Instagram"},
            TELEGRAM:{ICON:faTelegram,LINK:"/",TITLE:"Telegram"},
            MESSENGER:{ICON:faFacebookMessenger,LINK:"/",TITLE:"Facebook Messenger"},
            VIBER:{ICON:faViber,LINK:"/",TITLE:"VIBER"}
        },
        COPYRING:{TEXT:"© 2020 Компания Justin"},
        PRIVACY_POLICY:{
            TEXT:"Політика конфіденційності",
            LINK:"/"
        }
    }
}

export const Footer = (state = initialState, action) =>{
    return state
}