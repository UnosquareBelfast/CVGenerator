import * as actionTypes from './actionTypes';

export const selectEmployee = employee => {
  return {
    type: actionTypes.SELECT_EMPLOYEE,
    employee,
  };
};

export const selectTemplate = template => {
  return {
    type: actionTypes.SELECT_TEMPLATE,
    template,
  };
};

export const generateEmployeeCV = (employee, template) => {
  const selectedItems = [];
  selectedItems.push(employee, template);

  return {
    type: actionTypes.GENERATE_CV,
    selectedItems,
  };
};
