import { combineReducers } from 'redux';
import { selectedOptionsReducer, selectedItemsReducer } from './selected-options';

const EMPLOYEES = 'EMPLOYEES';
const TEMPLATES = 'TEMPLATES';
const GENERATE_CV = 'GENERATE_CV';

const rootReducer = combineReducers({
  [EMPLOYEES]: selectedOptionsReducer,
  [TEMPLATES]: selectedOptionsReducer,
  [GENERATE_CV]: selectedItemsReducer,
});
export default rootReducer;
