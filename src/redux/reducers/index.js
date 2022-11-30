import { combineReducers} from 'redux';
import counterReducer from './counterReducer';
import  nameReducer  from './nameReducer';
import {dataReducer} from './dataCountReducers'
export default combineReducers({
 counterReducer,nameReducer,dataReducer
});