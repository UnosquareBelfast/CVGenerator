import React from 'react';
import { Select, Button } from 'Common';
import mockDataForSelect from 'Utilities';
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
      <Button value="TestButton" disabled={false} type="submit" />
    </div>
  </StyledPage>
);

export default container(Selector);
