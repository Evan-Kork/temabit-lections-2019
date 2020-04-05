import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Menu from '@/reducers/Menu'
import Tracking from '@/reducers/Tracking'
import Branch from '@/reducers/Branch'
import Calculation from '@/reducers/Calculation'
import Error from '@/reducers/Error'
import About from '@/reducers/About'
import Auth from '@/reducers/Auth'

export default (history : History) => combineReducers({
    Auth,
    Menu,
    Tracking,
    Branch,
    Calculation,
    Error,
    About,
    router: connectRouter(history)
})