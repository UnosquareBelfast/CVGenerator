import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchUsers, fetchTemplates } from 'Services';
import { getEmployeeCV } from 'Reducers/selected-options';

import { transformEmployees, transformTemplates } from './transform';

const SelectorContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      employeeCV: PT.shape({ id: PT.number, label: PT.string }).isRequired,
    };

    state = { employees: [], templates: [], employeeCV: [], modalIsOpen: false };

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
      const { employees, templates, employeeCV, modalIsOpen } = this.state;

      return (
        <Wrapped
          employees={transformEmployees(employees)}
          templates={transformTemplates(templates)}
          employeeCV={employeeCV}
          handleCancelClick={this.handleCancelModal}
          modalIsOpen={modalIsOpen}
        />
      );
    }
  };

const mapStateToProps = state => {
  return {
    employeeCV: getEmployeeCV(state.GENERATE_CV),
  };
};

export default compose(connect(mapStateToProps), SelectorContainer);
