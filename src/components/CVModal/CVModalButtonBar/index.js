import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { CancelModalButton, DownloadModalButton } from 'Components';
import StyledButtonBar from './styled';

export const CVModalButtonBar = ({ handleCancelClick, cvURL }) => (
  <StyledButtonBar>
    <CancelModalButton handleClick={handleCancelClick} />
    <DownloadModalButton cvURL={cvURL} />
  </StyledButtonBar>
);

CVModalButtonBar.propTypes = {
  handleCancelClick: PT.func.isRequired,
  cvURL: PT.string.isRequired,
};

export default CVModalButtonBar;
