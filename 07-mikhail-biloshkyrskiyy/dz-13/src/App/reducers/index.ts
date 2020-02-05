import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Multiple from '~reducers/multiple'
import MultipleCached from '~reducers/multipleCached'
import Fibonacci from '~reducers/fibonacci'
import Message from '~reducers/message'

export default (history : History) => combineReducers({
    Multiple,
    MultipleCached,
    Fibonacci,
    Message,
    router: connectRouter(history)
})