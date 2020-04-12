import { GET_LOCALITIES } from '../constans';


const initialLocalities = {
    listLocalities: [],
    loaded: false
};

const localities = (state = initialLocalities, action) => {
    switch (action.type) {
        case GET_LOCALITIES:
            return {
                listLocalities: action.listLocalities, 
                loaded: action.statusLoad
            }; 
        default:
            return state;
    }
}
export default localities;