import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getEmployee, getTemplate } from 'Reducers/selected-options';
import { generateEmployeeCV } from 'Actions';

const GenerateButtonContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      selectedEmployee: PT.shape({ id: PT.number, label: PT.string }).isRequired,
      selectedTemplate: PT.shape({ id: PT.number, label: PT.string }).isRequired,
      employeeCV: PT.func.isRequired,
    };

    state = { renderModal: false };

    isDisabled = () => {
      const { selectedEmployee, selectedTemplate } = this.props;
      return (
        Object.entries(selectedEmployee).length === 0 ||
        Object.entries(selectedTemplate).length === 0
      );
    };

    handleOnClick = () => {
      const { selectedEmployee, selectedTemplate, employeeCV } = this.props;

      // info that will eventually be sent to the backend in the POST
      employeeCV(selectedEmployee, selectedTemplate);
    };

    render() {
      return <Wrapped disabled={this.isDisabled()} handleClick={this.handleOnClick} />;
    }
  };

const mapStateToProps = state => {
  return {
    selectedEmployee: getEmployee(state.EMPLOYEES),
    selectedTemplate: getTemplate(state.TEMPLATES),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    employeeCV: (selectedEmployee, selectedTemplate) =>
      dispatch(generateEmployeeCV(selectedEmployee, selectedTemplate)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), GenerateButtonContainer);
