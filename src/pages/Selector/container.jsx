import React from 'react';
import { fetchUsers, fetchTemplates } from 'Services';

import { transformEmployees, transformTemplates } from './transform';

const SelectorContainer = Wrapped =>
  class extends React.Component {
    state = { employees: [], templates: [] };

    componentDidMount() {
      fetchUsers().then(employees => this.setState({ employees }));
      fetchTemplates().then(templates => this.setState({ templates }));
    }

    componentDidUpdate(prevProps) {
      const { employeeCV } = this.props;
      if (prevProps.employeeCV !== employeeCV) {
        this.setState({ employeeCV, modalIsOpen: true });
      }
    }

    handleCancelModal = () => this.setState({ modalIsOpen: false });

    render() {
      const { employees, templates } = this.state;

      return (
        <Wrapped
          employees={transformEmployees(employees)}
          templates={transformTemplates(templates)}
        />
      );
    }
  };

export default SelectorContainer;
