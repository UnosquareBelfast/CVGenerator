import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { CancelModalButton, DownloadModalButton } from 'Components';
import StyledButtonBar from './styled';

export const CVModalButtonBar = ({ handleCancelClick, cvData }) => (
  <StyledButtonBar>
    <CancelModalButton handleClick={handleCancelClick} />
    <DownloadModalButton cvData={cvData} />
  </StyledButtonBar>
);

CVModalButtonBar.propTypes = {
  handleCancelClick: PT.func.isRequired,
  cvData: PT.string.isRequired,
};

export default CVModalButtonBar;
