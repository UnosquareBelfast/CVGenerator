import { combineReducers } from 'redux';
import selectedOptionsReducer, * as FromSelectedOptions from './selected-options';

const EMPLOYEES = 'EMPLOYEES';
const TEMPLATES = 'TEMPLATES';

const rootReducer = combineReducers({
  [EMPLOYEES]: selectedOptionsReducer,
  [TEMPLATES]: selectedOptionsReducer,
});
export default rootReducer;

export const getEmployee = store => FromSelectedOptions.getEmployee(store[EMPLOYEES]);
export const getTemplate = store => FromSelectedOptions.getTemplate(store[TEMPLATES]);
