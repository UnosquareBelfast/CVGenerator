import React from 'react';
import Label from 'Common';
import container from './container';

const Selector = () => {
  return (
    <div>
      <Label text="Hello World" isRequired />
    </div>
  );
};

export default container(Selector);
