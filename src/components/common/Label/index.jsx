import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { StyledLabel } from './styled';

const Label = ({ text, isRequired }) => (
  <StyledLabel>
    {text} {isRequired && <span>*</span>}
  </StyledLabel>
);

Label.propTypes = {
  text: PT.string.isRequired,
  isRequired: PT.bool.isRequired,
};
export default Label;
