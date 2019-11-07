import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { selectFields } from 'Constants';
import { selectEmployee, selectTemplate } from 'Actions';

const SelectContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      text: PT.string.isRequired,
      isRequired: PT.bool.isRequired,
      name: PT.string,
      isSearchable: PT.bool.isRequired,
      isDisabled: PT.bool.isRequired,
      options: PT.arrayOf(PT.object).isRequired,
      selectedEmployee: PT.func.isRequired,
      selectedTemplate: PT.func.isRequired,
    };

    static defaultProps = {
      name: 'selectComponent',
    };

    state = { selected: {} };

    handleOnChange = e => {
      this.setState(
        {
          selected: e,
        },
        () => this.handleSelected(),
      );
    };

    handleSelected = () => {
      const { selected } = this.state;
<<<<<<< HEAD
      const { name, selectedEmployee, selectedTemplate } = this.props;

      if (name === selectFields.EMPLOYEE) {
        selectedEmployee(selected);
      }

      if (name === selectFields.TEMPLATE) {
        selectedTemplate(selected);
=======
      const { name } = this.props;

      if (name === selectFields.employee) {
        this.props.selectEmployee(selected);
      }

      if (name === selectFields.template) {
        this.props.selectTemplate(selected);
>>>>>>> Get selected options from selects
      }
    };

    render() {
      const { text, isRequired, name, isSearchable, isDisabled, options } = this.props;
      const { selected } = this.state;
      return (
        <Wrapped
          selected={selected}
          handleOnChange={this.handleOnChange}
          text={text}
          isRequired={isRequired}
          name={name}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          options={options}
        />
      );
    }
  };

<<<<<<< HEAD
const mapDispatchToProps = dispatch => {
  return {
    selectedEmployee: selected => dispatch(selectEmployee(selected)),
    selectedTemplate: selected => dispatch(selectTemplate(selected)),
  };
};
=======
function mapDispatchToProps(dispatch) {
  return {
    selectEmployee: selected => dispatch(selectEmployee(selected)),
    selectTemplate: selected => dispatch(selectTemplate(selected)),
  };
}
>>>>>>> Get selected options from selects

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  SelectContainer,
);
<<<<<<< HEAD
=======
/* eslint-enable react/destructuring-assignment */
>>>>>>> Get selected options from selects
