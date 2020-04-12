import { GET_BRANCH_TYPES } from '../constans';

const axios = require('axios');
export function branchTypesDataSuccess(listBranchTypes, statusLoad){
    return {
        type: GET_BRANCH_TYPES,
        listBranchTypes,
        statusLoad: statusLoad
    }
}


export function getBranchTypes(url){
    return (dispatch) => {
            axios.get(url)
            .then(res => {
                if(!res.data.status === 1){
                    throw new Error(res.statusText);
                }
                let dataBranchType = res.data.result;
                return dataBranchType;
            })
            .then(dataBranchType => dispatch(branchTypesDataSuccess(dataBranchType, true)));
    }
}