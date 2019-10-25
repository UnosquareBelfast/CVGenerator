import React from 'react';
import { PropTypes as PT } from 'prop-types';
import Select from 'Components/Select';
import { SelectorStyle } from './styled';
import container from './container';

const Selector = props => {
  const { employeeOptions, clientOptions, templateOptions } = props;

  return (
    <SelectorStyle>
      <Select options={employeeOptions} text="Employee" />
      <Select options={clientOptions} text="Client" />
      <Select options={templateOptions} text="Template" />
    </SelectorStyle>
  );
};

Selector.propTypes = {
  employeeOptions: PT.arrayOf(PT.object).isRequired,
  clientOptions: PT.arrayOf(PT.object).isRequired,
  templateOptions: PT.arrayOf(PT.object).isRequired,
};
export default container(Selector);
