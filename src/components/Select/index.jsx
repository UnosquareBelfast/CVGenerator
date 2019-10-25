import React from 'react';
import { PropTypes as PT } from 'prop-types';
import Select from 'react-select';
import Label from 'Components/Label';
import { SelectStyle, reactSelectCustomStyle } from './styled';
import container from './container';

const CustomSelect = props => {
  const { options, text } = props;

  return (
    <SelectStyle>
      <Label text={text} />
      <Select styles={reactSelectCustomStyle} options={options} />
    </SelectStyle>
  );
};

CustomSelect.propTypes = {
  options: PT.arrayOf(PT.object).isRequired,
  text: PT.string.isRequired,
};

export default container(CustomSelect);
