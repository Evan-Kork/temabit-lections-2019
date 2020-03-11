import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import Menu from '@/reducers/Menu'
import SideMenu from '@/reducers/Menu/sideMenu'
import Tracking from '@/reducers/Tracking'
import TrackingHistory from '@/reducers/Tracking/trackingHistory'
import Declaration from '@/reducers/Tracking/declaration'
import Location from '@/reducers/Branch/location'
import Branch from '@/reducers/Branch'
import BranchTypes from '@/reducers/Branch/types'
import Localities from '@/reducers/Branch/localities'
import LocalitiesSelect from '@/reducers/Branch/localitiesSelect'
import CalculationLength from '@/reducers/Calculation/length'
import CalculationWeight from '@/reducers/Calculation/weight'

export default (history : History) => combineReducers({
    Menu,
    SideMenu,
    Declaration,
    Location,
    Tracking,
    TrackingHistory,
    Branch,
    BranchTypes,
    Localities,
    LocalitiesSelect,
    CalculationLength,
    CalculationWeight,
    router: connectRouter(history)
})