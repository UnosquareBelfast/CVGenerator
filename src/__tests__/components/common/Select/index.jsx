import React from 'react';
import { shallow } from 'enzyme';
import context from 'jest-context';
import Select from 'react-select';
import 'SetupTests';

import { SelectComponent, Label } from 'Common';

describe('Select component', () => {
  let wrapper;
  let options;

  beforeEach(() => {
    options = [{ label: 'Dasher' }, { label: 'Dancer' }, { label: 'Prancer' }];
    wrapper = shallow(
      <SelectComponent
        text="My Label Text"
        isRequired
        isSearchable
        isDisabled={false}
        options={options}
      />,
    );
  });

  afterEach(() => {
    options = null;
    wrapper = null;
  });

  it('renders a Label component', () => {
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('renders a react-select component', () => {
    expect(wrapper.find(Select)).toHaveLength(1);
  });

  context('user selects an option', () => {
    it('passes this option to the react-select as a value', () => {
      wrapper.find('StateManager').simulate('change', { label: 'Dasher' });

      expect(wrapper.find('StateManager').props().value).toMatchObject({ label: 'Dasher' });
    });

    it('passes this option to local state', () => {
      wrapper.find('StateManager').simulate('change', { label: 'Dasher' });

      expect(wrapper.state().selected).toMatchObject({ label: 'Dasher' });
    });
  });
});
