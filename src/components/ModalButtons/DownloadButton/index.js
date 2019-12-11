import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { buttonTypes } from 'Constants';
import StyledDownloadButton from './styled';

const DownloadButton = ({ handleClick, className }) => (
  <StyledDownloadButton
    value="Download"
    type={buttonTypes.BUTTON}
    handleClick={handleClick}
    disabled={false}
    className={className}
  />
);

DownloadButton.propTypes = {
  handleClick: PT.func.isRequired,
  className: PT.string.isRequired,
};

export default DownloadButton;
