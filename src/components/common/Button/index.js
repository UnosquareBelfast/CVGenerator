import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { StyledButton } from './styled';

const Button = ({ value, disabled, handleClick, type, className }) => {
  // eslint issue - https://github.com/yannickcr/eslint-plugin-react/issues/1555
  /* eslint-disable react/button-has-type */
  return (
    <StyledButton type={type} disabled={disabled} onClick={handleClick} className={className}>
      {value}
    </StyledButton>
  );
  /* eslint-enable react/button-has-type */
};

Button.defaultProps = {
  className: 'defaultClassName',
};

Button.propTypes = {
  value: PT.string.isRequired,
  className: PT.string,
  disabled: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
  type: PT.oneOf(['submit', 'button']).isRequired,
};

export default Button;
