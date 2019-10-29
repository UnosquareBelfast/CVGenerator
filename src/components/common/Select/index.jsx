import React from 'react';
import { PropTypes as PT } from 'prop-types';
import Select from 'react-select';
import { Label } from 'Common';

const SelectComponent = ({ text, isRequired }) => {
  return (
    <div>
      <Label text={text} isRequired={isRequired} />
      <Select isDisabled={false} isSearchable />
    </div>
  );
};

export default SelectComponent;

SelectComponent.propTypes = {
  text: PT.string.isRequired,
  isRequired: PT.bool.isRequired,
};
