import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Select } from 'Common';
import { mockDataForSelect } from 'Utilities';
import { GenerateCVButton, CVModal } from 'Components';
import container from './container';

import StyledPage from './styled';

export const UnwrappedSelector = ({ employees, templates }) => (
  <StyledPage>
    <h1>CV Generator</h1>
    <div className="selectComponents">
      <Select
        data-select="select"
        text="Employee"
        isRequired
        name="selectComponentEmployee"
        isSearchable
        isDisabled={false}
        options={employees}
      />
      <Select
        data-select="client"
        text="Client"
        isRequired
        name="selectComponentClient"
        isSearchable
        isDisabled={false}
        options={mockDataForSelect.clients}
      />
      <Select
        data-select="template"
        text="Template"
        isRequired
        name="selectComponentTemplate"
        isSearchable
        isDisabled={false}
        options={templates}
      />
      <GenerateCVButton data-button="generate-cv" />
    </div>
    <CVModal />
  </StyledPage>
);

UnwrappedSelector.propTypes = {
  employees: PT.arrayOf(
    PT.shape({
      id: PT.number,
      label: PT.string,
    }),
  ).isRequired,
  templates: PT.arrayOf(
    PT.shape({
      id: PT.number,
      label: PT.string,
    }),
  ).isRequired,
};

const WrappedSelector = container(UnwrappedSelector);

export default WrappedSelector;
