import React from 'react';
import { PropTypes as PT } from 'prop-types';
import StyledDownloadButton from './styled';

const DownloadButton = ({ cvData }) => (
  <StyledDownloadButton href={cvData} download>
    Download
  </StyledDownloadButton>
);

DownloadButton.propTypes = {
  cvData: PT.string.isRequired,
};

export default DownloadButton;
