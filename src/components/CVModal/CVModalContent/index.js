import React from 'react';
import { PropTypes as PT } from 'prop-types';
import StyledContent from './styled';

export const CVModalContent = ({ cvData }) => (
  <StyledContent>
    <object data={cvData} title="CV Data" />
  </StyledContent>
);

CVModalContent.propTypes = {
  cvData: PT.func.isRequired,
};

export default CVModalContent;
