import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Select } from 'Common';
import { mockDataForSelect } from 'Utilities';
import { GenerateCVButton } from 'Components';
import container from './container';

import StyledPage from './styled';

const Selector = ({ employees, templates }) => (
  <StyledPage>
    <h1>CV Generator</h1>
    <div className="selectComponents">
      <Select
        text="Employee"
        isRequired
        name="selectComponentEmployee"
        isSearchable
        isDisabled={false}
        options={employees}
      />
      <Select
        text="Client"
        isRequired
        name="selectComponentClient"
        isSearchable
        isDisabled={false}
        options={mockDataForSelect.clients}
      />
      <Select
        text="Template"
        isRequired
        name="selectComponentTemplate"
        isSearchable
        isDisabled={false}
        options={templates}
      />
      <GenerateCVButton />
    </div>
  </StyledPage>
);

Selector.propTypes = {
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

export default container(Selector);
