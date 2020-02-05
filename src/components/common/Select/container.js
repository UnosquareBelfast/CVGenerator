import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { selectFields } from 'Constants';
import { selectEmployee, selectTemplate } from 'Actions';

export const SelectContainer = Wrapped =>
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
      const { name, selectedEmployee, selectedTemplate } = this.props;
      console.log('selected: ', selected);
      if (name === selectFields.EMPLOYEE) {
        selectedEmployee(selected);
      }

      if (name === selectFields.TEMPLATE) {
        selectedTemplate(selected);
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

const mapDispatchToProps = dispatch => {
  return {
    selectedEmployee: selected => dispatch(selectEmployee(selected)),
    selectedTemplate: selected => dispatch(selectTemplate(selected)),
  };
};

export default compose(connect(null, mapDispatchToProps), SelectContainer);
