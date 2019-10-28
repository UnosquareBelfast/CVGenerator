import React from 'react';
import container from './container';
import Label from '../../components/common/Label';

const Selector = () => {
  return (
    <div>
      <Label text="Hello World" isRequired />
    </div>
  );
};

export default container(Selector);
