import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { buttonTypes } from 'Constants';
import container from './container';
import StyledDownloadButton from './styled';

const DownloadButton = ({ handleClick, className, isClicked }) => (
  <StyledDownloadButton
    className={className}
    value="Download"
    type={buttonTypes.BUTTON}
    handleClick={handleClick}
    disabled={false}
    isClicked={isClicked}
  />
);

DownloadButton.propTypes = {
  handleClick: PT.func.isRequired,
  className: PT.string.isRequired,
  isClicked: PT.bool.isRequired,
};

export default container(DownloadButton);
