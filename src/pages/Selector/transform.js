import { alphabeticalSort } from 'Utilities';

export const transformEmployees = employees => {
  const transformedEmployees = employees.map(value => {
    return { id: value.id, label: `${value.lastName}, ${value.firstName}` };
  });

  return alphabeticalSort(transformedEmployees, employee => employee.label);
};

export const transformTemplates = templates => {
  const transformedTemplates = templates.map(value => {
    return { id: value.id, label: value.templateName };
  });

  return alphabeticalSort(transformedTemplates, template => template.templateName);
};
