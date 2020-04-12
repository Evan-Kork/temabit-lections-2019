import { TOGGLE_ASSIDE } from '../constans';

const toggleAsside = (state = 'hidden', action) => {
    switch (action.type) {
        case TOGGLE_ASSIDE:
            return action.status;
        default:
            return state;
    }
}
export default toggleAsside;