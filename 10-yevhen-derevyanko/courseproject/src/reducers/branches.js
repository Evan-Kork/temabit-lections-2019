import { GET_BRANCHES } from '../constans';
import { GET_BRANCHES_FOR_MAP } from '../constans';
import { GET_BRANCHES_SEARCH } from '../constans';


const initialBranches = {
    listBranches: [],
    listBranchesForMap: [],
    listBranchesSearch: [],
    loaded: false
};

const branches = (state = initialBranches, action) => {
    switch (action.type) {
        case GET_BRANCHES:
            return {
                ...state,
                listBranches: action.listBranches, 
                loaded: action.statusLoad,
            };
        case GET_BRANCHES_FOR_MAP:
            return {
                ...state,
                listBranchesForMap: action.listBranchesForMap, 
            };
        case GET_BRANCHES_SEARCH:
            return {
                ...state,
                listBranchesSearch: action.listBranchesSearch, 
            };         
        default:
            return state;
    }
}
export default branches;
