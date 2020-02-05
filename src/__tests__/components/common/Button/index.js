import { Button } from 'Common';
import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

describe('Button component', () => {
  let wrapper, props, mockCallBack;

  beforeEach(() => {
    mockCallBack = jest.fn();
    props = {
      type: 'button',
      disabled: true,
      className: 'foo',
      value: 'bar',
      handleClick: mockCallBack,
    };

    wrapper = shallow(<Button {...props} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('renders a button component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('has props', () => {
    wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');

    expect(wrapper.prop('type')).toEqual('button');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('foo');
    expect(wrapper.text()).toEqual('bar');
    expect(mockCallBack).toBeCalled();
  });
});
