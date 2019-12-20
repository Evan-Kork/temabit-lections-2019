import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import MethodArray from 'reducers/methodArray'

export default history => combineReducers({
    MethodArray,
    router: connectRouter(history)
})