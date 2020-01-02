import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { fetchUsers, fetchTemplates } from 'Services';

import { transformEmployees, transformTemplates } from './transform';

const SelectorContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      selectedEmployee: PT.shape({ id: PT.number, label: PT.string }).isRequired,
      selectedTemplate: PT.shape({ id: PT.number, label: PT.string }).isRequired,
      employeeCV: PT.func.isRequired,
    };

    state = { employees: [], templates: [] };

    componentDidMount() {
      fetchUsers().then(employees => this.setState({ employees }));
      fetchTemplates().then(templates => this.setState({ templates }));
    }

    componentDidUpdate(prevProps) {
      const { employeeCV } = this.props;
      if (prevProps.employeeCV !== employeeCV) {
        this.setState({ employeeCV, isModalOpen: true });
      }
    }

    handleCancelModal = () => this.setState({ isModalOpen: false });

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
