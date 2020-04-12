import { GET_SERVICES } from '../constans';


const initialServicess = {
    listServicess: [],
    loaded: false
};

const branches = (state = initialServicess, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return {
                listServicess: action.listServicess, 
                loaded: action.statusLoad
            }; 
        default:
            return state;
    }
}
export default branches;