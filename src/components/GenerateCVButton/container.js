import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getEmployee, getTemplate } from 'Reducers/selected-options';

const GenerateButtonContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      selectedEmployee: PT.shape({ id: PT.number, label: PT.string }).isRequired,
      selectedTemplate: PT.shape({ id: PT.number, label: PT.string }).isRequired,
    };

    isDisabled = () => {
      const { selectedEmployee, selectedTemplate } = this.props;
      return (
        Object.entries(selectedEmployee).length === 0 ||
        Object.entries(selectedTemplate).length === 0
      );
    };

    handleOnClick = () => {
      const { selectedEmployee, selectedTemplate } = this.props;
      // info that will eventually be sent to the backend in the POST
      console.log('selected employee: ', selectedEmployee);
      console.log('selectedTemplate: ', selectedTemplate);
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

export default compose(connect(mapStateToProps), GenerateButtonContainer);
