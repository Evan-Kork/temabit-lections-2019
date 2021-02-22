import { GET_SERVICES } from '../constans';

const axios = require('axios');

export function servicessDataSuccess(listServicess, statusLoad){
    return {
        type: GET_SERVICES,
        listServicess,
        statusLoad: statusLoad
    }
}


export function getServicess(url){
    return (dispatch) => {
            axios.get(url)
            .then(res => {
                if(!res.data.status === 1){
                    throw new Error(res.statusText);
                }
                let dataSucces = res.data.result;
                return dataSucces;
            })
            .then(dataSucces => dispatch(servicessDataSuccess(dataSucces, true)));
    }
}