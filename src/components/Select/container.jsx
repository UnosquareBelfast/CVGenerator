import React from 'react';
import { PropTypes as PT } from 'prop-types';

const SelectContainer = Wrapped =>
  class Select extends React.Component {
    render() {
      const { options, text } = this.props;
      return <Wrapped options={options} text={text} />;
    }
  };

SelectContainer.propTypes = {
  options: PT.arrayOf(PT.object).isRequired,
  text: PT.string.isRequired,
};

export default SelectContainer;
