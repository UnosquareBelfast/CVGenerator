import { SelectComponent } from 'Common/Select';
import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

describe('SelectComponent', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      selected: { 1: 'foo' },
      handleOnChange: jest.fn(),
      text: 'foo',
      isRequired: true,
      name: 'select-foo',
      isSearchable: true,
      options: [{ 1: 'foo' }, { 2: 'bar' }],
      isDisabled: false,
    };

    wrapper = shallow(<SelectComponent {...props} />);
  });

  afterEach(() => {
    props = null;
    wrapper = null;
  });

  it('returns a styled component', () => {
    expect(wrapper.find('[data-select="styled-select"]')).toHaveLength(1);
  });

  it('passes props to the Label component', () => {
    expect(wrapper.find('Label').props().text).toEqual('foo');
    expect(wrapper.find('Label').props().isRequired).toEqual(true);
  });

  it('passes props to the Select component', () => {
    expect(wrapper.find('[data-select="select"]').props().isDisabled).toEqual(false);
    expect(wrapper.find('[data-select="select"]').props().styles).toBeDefined();
    expect(wrapper.find('[data-select="select"]').props().name).toEqual('select-foo');
    expect(wrapper.find('[data-select="select"]').props().isSearchable).toEqual(true);
    expect(wrapper.find('[data-select="select"]').props().options).toEqual([
      { '1': 'foo' },
      { '2': 'bar' },
    ]);
    expect(wrapper.find('[data-select="select"]').props().onChange).toBeDefined();
    expect(wrapper.find('[data-select="select"]').props().value).toEqual({ '1': 'foo' });
  });

  describe('StyledSelect component', () => {
    it('returns a Label component', () => {
      expect(wrapper.find('Label')).toHaveLength(1);
    });

    it('returns a react-select component', () => {
      expect(wrapper.find('StateManager')).toHaveLength(1);
      expect(wrapper.find('[data-select="select"]')).toHaveLength(1);
    });
  });
});
