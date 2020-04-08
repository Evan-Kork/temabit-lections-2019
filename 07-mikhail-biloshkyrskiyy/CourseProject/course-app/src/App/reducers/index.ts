import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Menu from '@/reducers/Menu'
import Tracking from '@/reducers/Tracking'
import Office from '@/reducers/Office'
import Calculation from '@/reducers/Calculation'
import Error from '@/reducers/Error'
import About from '@/reducers/About'
import Auth from '@/reducers/Auth'

export default (history : History) => combineReducers({
    Auth,
    Menu,
    Tracking,
    Office,
    Calculation,
    Error,
    About,
    router: connectRouter(history)
})