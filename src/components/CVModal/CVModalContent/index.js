import React from 'react';
import { PropTypes as PT } from 'prop-types';
import StyledContent from './styled';

export const CVModalContent = ({ cvURL }) => (
  <StyledContent>
    <object data={cvURL} title="CV Data" />
  </StyledContent>
);

CVModalContent.propTypes = {
  cvURL: PT.func.isRequired,
};

export default CVModalContent;
