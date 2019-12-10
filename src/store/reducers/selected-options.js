import initialState from './initialState';

const selectedOptionsReducer = (state = initialState.selectedOptions, action) => {
  switch (action.type) {
    case 'SELECT_EMPLOYEE':
      return { ...state, employee: action.employee };
    case 'SELECT_TEMPLATE':
      return { ...state, template: action.template };
    default:
      return state;
  }
};

const selectedItemsReducer = (state = initialState.selectedItems, action) => {
  switch (action.type) {
    case 'GENERATE_CV':
      return { ...state, selectedItems: action.selectedItems };
    default:
      return state;
  }
};

export const getEmployee = store => store.employee;
export const getTemplate = store => store.template;
export const getEmployeeCV = store => store.selectedItems;
export { selectedOptionsReducer, selectedItemsReducer };
