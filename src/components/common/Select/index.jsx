import React from 'react';
import { PropTypes as PT } from 'prop-types';
import Select from 'react-select';
import { Label } from 'Common';

import { StyledSelect, reactSelectCustomStyle } from './styled';

class SelectComponent extends React.Component {
  state = { selected: null };

  handleOnChange = selected => {
    this.setState({ selected });
  };

  render() {
    const { text, isRequired, name, isSearchable, options, isDisabled } = this.props;
    const { selected } = this.state;

    return (
      <StyledSelect>
        <Label text={text} isRequired={isRequired} />
        <Select
          isDisabled={isDisabled}
          name={name}
          isSearchable={isSearchable}
          options={options}
          onChange={this.handleOnChange}
          value={selected}
        />
        <div className="selectedDiv">Selected option: {selected && selected.label}</div>
      </StyledSelect>
    );
  }
}

export default SelectComponent;

SelectComponent.defaultProps = {
  name: 'selectComponent',
};

SelectComponent.propTypes = {
  text: PT.string.isRequired,
  isRequired: PT.bool.isRequired,
  name: PT.string,
  isSearchable: PT.bool.isRequired,
  isDisabled: PT.bool.isRequired,
  options: PT.arrayOf(PT.object).isRequired,
};
