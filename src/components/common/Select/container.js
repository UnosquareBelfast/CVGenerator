import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { selectFields } from 'Constants';
import { selectEmployee, selectTemplate } from 'Actions';

/* eslint-disable react/destructuring-assignment */
const SelectContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      text: PT.string.isRequired,
      isRequired: PT.bool.isRequired,
      name: PT.string,
      isSearchable: PT.bool.isRequired,
      isDisabled: PT.bool.isRequired,
      options: PT.arrayOf(PT.object).isRequired,
      selectEmployee: PT.func.isRequired,
      selectTemplate: PT.func.isRequired,
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
      const { name } = this.props;

      if (name === selectFields.employee) {
        this.props.selectEmployee(selected);
      }

      if (name === selectFields.template) {
        this.props.selectTemplate(selected);
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

function mapDispatchToProps(dispatch) {
  return {
    selectEmployee: selected => dispatch(selectEmployee(selected)),
    selectTemplate: selected => dispatch(selectTemplate(selected)),
  };
}

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  SelectContainer,
);
/* eslint-enable react/destructuring-assignment */
