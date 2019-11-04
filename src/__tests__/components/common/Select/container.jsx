import container from 'Common/Select/container';
import { Select as SelectComponent } from 'Common';
import context from 'jest-context';
import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

describe('Select component container', () => {
  let Container;
  let wrapper;
  beforeEach(() => {
    Container = container(SelectComponent);
    wrapper = shallow(
      <Container
        text="foo"
        isRequired
        isSearchable
        isDisabled={false}
        options={[{}]}
        name="wrapperComponent"
      />,
    );
  });

  afterEach(() => {
    Container = null;
    wrapper = null;
  });
  it('renders a Wrapper component', () => {
    expect(wrapper.props().name).toEqual('wrapperComponent');
  });

  it('has empty state', () => {
    expect(wrapper.state()).toMatchObject({ selected: {} });
  });

  context('component receives a callback', () => {
    it('stores the value in state', () => {
      wrapper.prop('handleOnChange')({ label: 'Dasher' });

      expect(wrapper.state()).toMatchObject({ selected: { label: 'Dasher' } });
    });
  });
});
