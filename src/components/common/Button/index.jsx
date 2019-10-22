import React from 'react';
import { PropTypes as PT } from 'prop-types';
import ButtonStyle from './styled';

const Button = props => {
  const { label, onClick } = props;
  return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};

Button.propTypes = {
  label: PT.string.isRequired,
  onClick: PT.func.isRequired,
};

export default Button;
