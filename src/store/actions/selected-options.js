import * as actionTypes from './action-types';

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
