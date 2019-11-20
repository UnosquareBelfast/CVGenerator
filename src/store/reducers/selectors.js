import selectedOptionsReducer from './selected-options';

export const getEmployee = store => selectedOptionsReducer.getEmployee(store[EMPLOYEES]);
export const getTemplate = store => selectedOptionsReducer.getTemplate(store[TEMPLATES]);
