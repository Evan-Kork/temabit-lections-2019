import { combineReducers } from 'redux';
import common, {RootState} from './common/common';


export default combineReducers({
  common
});

export interface GlobalState {
  common: RootState;
}