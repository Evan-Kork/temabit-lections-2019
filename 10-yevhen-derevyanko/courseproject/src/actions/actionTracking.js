import { GET_TRACKING_INFO } from '../constans';

const axios = require('axios');

export function trakingDataSuccess(trakingInfo){
    if(trakingInfo.code){
        return {
            type: GET_TRACKING_INFO,
            trakingInfo: trakingInfo.ua,
            ttn_number: false
        }
    }
    return {
        type: GET_TRACKING_INFO,
        trakingInfo,
        ttn_number: trakingInfo[0].orderNumber
    }
}
export function getTrakingInfo(url){
    return (dispatch) => {
            axios.get(url)
            .then(res => {
                if(!res.data.status === 1){
                    throw new Error(res.statusText);
                }
                if(!res.data.status){
                    return res.data.msg;
                }
                return res.data.result;
            })
            .then(dataTraking => dispatch(trakingDataSuccess(dataTraking)));
    }
}