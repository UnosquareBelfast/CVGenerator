import React from 'react';
import { PropTypes as PT } from 'prop-types';
import Select from 'react-select';
import { Label } from 'Common';

import StyledSelect from './styled';

const SelectComponent = ({ text, isRequired }) => {
  return (
    <StyledSelect>
      <Label text={text} isRequired={isRequired} />
      <Select isDisabled={false} isSearchable />
    </StyledSelect>
  );
};

export default SelectComponent;

SelectComponent.propTypes = {
  text: PT.string.isRequired,
  isRequired: PT.bool.isRequired,
};
