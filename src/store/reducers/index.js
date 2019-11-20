import { combineReducers } from 'redux';
import selectedOptionsReducer from './selected-options';

const EMPLOYEES = 'EMPLOYEES';
const TEMPLATES = 'TEMPLATES';

const rootReducer = combineReducers({
  [EMPLOYEES]: selectedOptionsReducer,
  [TEMPLATES]: selectedOptionsReducer,
});
export default rootReducer;
