import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { CancelModalButton, DownloadModalButton } from 'Components';
import StyledButtonBar from './styled';

export const CVModalButtonBar = ({ handleCancelClick }) => (
  <StyledButtonBar>
    <CancelModalButton handleClick={handleCancelClick} />
    <DownloadModalButton />
  </StyledButtonBar>
);

CVModalButtonBar.propTypes = {
  handleCancelClick: PT.func.isRequired,
};

export default CVModalButtonBar;
