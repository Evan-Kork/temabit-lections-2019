import { combineReducers } from 'redux';

import assideStatus from './asside';
import branches from './branches';
import servicess from './services';
import localities from './localities';
import branchTypes from './branch-types';
import tracking from './tracking';

export default combineReducers({
    assideStatus,
    branches,
    servicess,
    localities,
    branchTypes,
    tracking
})