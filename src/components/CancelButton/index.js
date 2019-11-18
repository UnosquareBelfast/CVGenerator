import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { buttonTypes } from 'Constants';
import container from './container';
import StyledCancelButton from './styled';

const CancelButton = ({ handleClick, className, isClicked }) => {
  console.log('isClicked: ', isClicked);
  return (
    <StyledCancelButton
      className={className}
      value="Cancel"
      type={buttonTypes.BUTTON}
      handleClick={handleClick}
      disabled={false}
      isClicked={isClicked}
    />
  );
};

CancelButton.propTypes = {
  handleClick: PT.func.isRequired,
  className: PT.string.isRequired,
};

export default container(CancelButton);
