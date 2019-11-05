import { orderBy, forEach } from 'lodash';

export const transformEmployees = employees => {
  const employeeCollection = [];
  forEach(employees, value => {
    employeeCollection.push({ id: value.id, label: `${value.lastName}, ${value.firstName}` });
  });

  return orderBy(employeeCollection, ['label', 'desc']);
};

export default transformEmployees;
