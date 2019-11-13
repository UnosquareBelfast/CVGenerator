import React from 'react';
import { Select } from 'Common';

import mockDataForSelect from 'Utilities';
import GenerateButton from '../../components/GenerateCVButton';
import container from './container';

import StyledPage from './styled';

const Selector = () => (
  <StyledPage>
    <h1>CV Generator</h1>
    <div className="selectComponents">
      <Select
        text="Employee"
        isRequired
        name="selectComponentEmployee"
        isSearchable
        isDisabled={false}
        options={mockDataForSelect.employees}
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
        options={mockDataForSelect.templates}
      />
      <GenerateButton />
    </div>
  </StyledPage>
);

export default container(Selector);
