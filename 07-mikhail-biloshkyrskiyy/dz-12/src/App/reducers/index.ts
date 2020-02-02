import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Clock from '~reducers/clock'
import Message from '~reducers/message'

export default (history : History) => combineReducers({
    Clock,
    Message,
    router: connectRouter(history)
})