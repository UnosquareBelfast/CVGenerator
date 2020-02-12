import React from 'react';
import { PropTypes as PT } from 'prop-types';
import BUTTON_TYPE from 'CommonConstants';
import { StyledPrimaryButton, StyledSecondaryButton } from './styled';

const Button = ({ value, disabled, handleClick, type, className, buttonType }) => {
  // eslint issue - https://github.com/yannickcr/eslint-plugin-react/issues/1555
  /* eslint-disable react/button-has-type */
  if (buttonType === BUTTON_TYPE.PRIMARY) {
    return (
      <StyledPrimaryButton
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={className}
      >
        {value}
      </StyledPrimaryButton>
    );
  }

  if (buttonType === BUTTON_TYPE.SECONDARY) {
    return (
      <StyledSecondaryButton
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={className}
      >
        {value}
      </StyledSecondaryButton>
    );
  }

  return null;
  /* eslint-enable react/button-has-type */
};

Button.propTypes = {
  value: PT.string.isRequired,
  disabled: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
  type: PT.oneOf(['submit', 'button']).isRequired,
  className: PT.string.isRequired,
  buttonType: PT.oneOf(['primary', 'secondary']).isRequired,
};

export default Button;
