import React from 'react';
import { PropTypes as PT } from 'prop-types';
import StyledDownloadButton from './styled';

const DownloadButton = ({ cvURL }) => (
  <StyledDownloadButton href={cvURL} download>
    Download
  </StyledDownloadButton>
);

DownloadButton.propTypes = {
  cvURL: PT.string.isRequired,
};

export default DownloadButton;
