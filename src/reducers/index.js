import { combineReducers } from 'redux';
//import { journalReducer, selectedOptionTypeTradeReducer, collectionValuesReducer } from './journalTradeRecuperation';
import globalVariableReducer from './globalVariableSlice';

const rootReducer = combineReducers({
  globalVariable: globalVariableReducer,
});

export default rootReducer;
