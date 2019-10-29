import React from 'react';
import { SelectComponent } from 'Common';
import container from './container';

import StyledPage from './styled';

const Selector = () => {
  const myOptions = [{ label: 'foo' }, { label: 'bar' }, { label: 'foobar' }];
  return (
    <StyledPage>
      <SelectComponent
        text="Select Label"
        isRequired
        name="selectComponent"
        isSearchable
        isDisabled={false}
        options={myOptions}
      />
    </StyledPage>
  );
};

export default container(Selector);
