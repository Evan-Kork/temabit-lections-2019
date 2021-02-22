import slide1 from '../resources/slider/Kasta_for_sayt.jpg'
import slide2 from '../resources/slider/Os_kab_Sayt.jpg'
import slide3 from '../resources/slider/Sayt_ROZETKA_3-1.jpg'

const initialState = {
    SLIDERS:{
        SLIDE_1:{
            IMG:slide1,
            TEXT:"KASTA",
            LINK:"/"
        },
        SLIDE_2:{
            IMG:slide2,
            TEXT:"Кабинет",
            LINK:"/"
        },
        SLIDE_3:{
            IMG:slide3,
            TEXT:"ROZETKA",
            LINK:"/"
        }
    }
}

export const carousel = (state = initialState, action) =>{
    return state
}