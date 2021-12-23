import { combineReducers } from 'redux';
import equipmentReducer from './equipmentReducer';
import workerReducer from './workerReducer';

const rootReducer = combineReducers({
  equipmentReducer: equipmentReducer,
  workerReducer: workerReducer,
});

export default rootReducer;
