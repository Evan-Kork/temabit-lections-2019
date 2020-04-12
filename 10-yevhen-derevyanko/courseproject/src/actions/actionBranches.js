import { GET_BRANCHES } from '../constans';
import { GET_BRANCHES_FOR_MAP } from '../constans';
import { GET_BRANCHES_SEARCH } from '../constans';

const axios = require('axios');

export function branchesDataSuccess(listBranches, statusLoad){
    return {
        type: GET_BRANCHES,
        listBranches,
        statusLoad: statusLoad
    }
}

export function branchesSearchDataSuccess(listBranchesSearch){
    return {
        type: GET_BRANCHES_SEARCH,
        listBranchesSearch,
    }
}

export function setDataBranchesForMap(listBranchesForMap){
    return {
        type: GET_BRANCHES_FOR_MAP,
        listBranchesForMap
    }
}

export function getBranches(url){
    return (dispatch) => {
        axios.get(url)
        .then(res => {
            if(!res.data.status === 1){
                throw new Error(res.statusText);
            }
            let dataBranch = res.data.result;
            return dataBranch;
        })
        .then(dataBranch => dispatch(branchesDataSuccess(dataBranch, true)));
    }
}


export function getBranchesSearch(url){
    return (dispatch) => {
        axios.get(url)
        .then(res => {
            if(!res.data.status === 1){
                throw new Error(res.statusText);
            }
            let dataBranch = res.data.result;
            return dataBranch;
        })
        .then(dataBranch => dispatch(branchesSearchDataSuccess(dataBranch)));
    }
}
