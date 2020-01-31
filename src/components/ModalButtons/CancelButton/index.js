import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { buttonTypes } from 'Constants';
import StyledCancelButton from './styled';

const CancelButton = ({ handleClick, className }) => (
  <StyledCancelButton
    value="Cancel"
    type={buttonTypes.BUTTON}
    handleClick={handleClick}
    disabled={false}
    className={className}
    buttonClass="secondary"
  />
);

CancelButton.propTypes = {
  handleClick: PT.func.isRequired,
  className: PT.string.isRequired,
};

export default CancelButton;
