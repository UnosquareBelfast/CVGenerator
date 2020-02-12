import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { buttonTypes } from 'Constants';
import BUTTON_TYPE from 'CommonConstants';
import container from './container';
import StyledGenerateCVButton from './styled';

const GenerateButton = ({ disabled, handleClick }) => {
  return (
    <StyledGenerateCVButton
      value="Generate CV"
      disabled={disabled}
      type={buttonTypes.SUBMIT}
      handleClick={handleClick}
      buttonType={BUTTON_TYPE.PRIMARY}
    />
  );
};

GenerateButton.propTypes = {
  disabled: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
};

export default container(GenerateButton);
