import React from 'react';
import { PropTypes as PT } from 'prop-types';
import Select from 'react-select';
import { Label } from 'Common';
import container from './container';
import { StyledSelect, SelectMenuStyles } from './styled';

export const SelectComponent = ({
  selected,
  handleOnChange,
  text,
  isRequired,
  name,
  isSearchable,
  options,
  isDisabled,
}) => (
  <StyledSelect data-select="styled-select">
    <Label text={text} isRequired={isRequired} />
    <Select
      styles={SelectMenuStyles}
      isDisabled={isDisabled}
      name={name}
      isSearchable={isSearchable}
      options={options}
      onChange={handleOnChange}
      value={selected}
      data-select="select"
    />
  </StyledSelect>
);

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
  selected: PT.shape({ id: PT.number, label: PT.string }).isRequired,
  handleOnChange: PT.func.isRequired,
};

export default container(SelectComponent);
