import { GET_BRANCH_TYPES } from '../constans';


const initialBranchTypes = {
    listBranchTypes: [],
    loaded: false
};

const branches = (state = initialBranchTypes, action) => {
    switch (action.type) {
        case GET_BRANCH_TYPES:
            return {
                listBranchTypes: action.listBranchTypes, 
                loaded: action.statusLoad
            };
        default:
            return state;
    }
}
export default branches;
