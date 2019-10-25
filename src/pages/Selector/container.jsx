import React from 'react';
import { employees, clients, templates } from 'Utilities/options';

const SelectorContainer = Wrapped =>
  class Selector extends React.Component {
    employeeOptions = employees.map(employee => {
      return { value: employee, label: employee };
    });

    clientOptions = clients.map(client => {
      return { value: client, label: client };
    });

    templateOptions = templates.map(template => {
      return { value: template, label: template };
    });

    render() {
      return (
        <Wrapped
          employeeOptions={this.employeeOptions}
          clientOptions={this.clientOptions}
          templateOptions={this.templateOptions}
        />
      );
    }
  };

export default SelectorContainer;
