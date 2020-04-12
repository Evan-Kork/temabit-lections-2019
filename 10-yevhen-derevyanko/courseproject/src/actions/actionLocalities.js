import { GET_LOCALITIES } from '../constans';

const axios = require('axios');

export function localitiesDataSuccess(listLocalities, statusLoad){
    return {
        type: GET_LOCALITIES,
        listLocalities,
        statusLoad: statusLoad
    }
}


export function getLocalities(url){
    return (dispatch) => {
            axios.get(url)
            .then(res => {
                if(!res.data.status === 1){
                    throw new Error(res.statusText);
                }
                let dataSucces = res.data.result;
                return dataSucces;
            })
            .then(dataSucces => dispatch(localitiesDataSuccess(dataSucces, true)));
    }
}