import { GET_TRACKING_INFO } from '../constans';

const initialTraking = {
    trakingInfo: null,
    ttn_number: null
};

const traking = (state = initialTraking, action) => {
    switch (action.type) {
        case GET_TRACKING_INFO:
            return {
                trakingInfo: action.trakingInfo, 
                ttn_number: action.ttn_number
            };  
        default:
            return state;
    }
}
export default traking;
