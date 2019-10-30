import React from 'react';
import { SelectComponent } from 'Common';
import mockDataForSelect from 'Utilities';
import container from './container';

import StyledPage from './styled';

const Selector = () => (
  <StyledPage>
    <SelectComponent
      text="Select Label"
      isRequired
      name="selectComponent"
      isSearchable
      isDisabled={false}
      options={mockDataForSelect.employees}
    />
  </StyledPage>
);

export default container(Selector);
