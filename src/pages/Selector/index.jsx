import React from 'react';
import { SelectComponent } from 'Common';
import container from './container';

const Selector = () => {
  return (
    <div>
      <SelectComponent text="Select Label" isRequired />
    </div>
  );
};

export default container(Selector);
