import { SelectContainer } from 'Common/Select/container';
// import { Select as SelectComponent } from 'Common';
import context from 'jest-context';
import React from 'react';
import { shallow, mount } from 'enzyme';
import 'SetupTests';

describe('SelectContainer component', () => {
  it('renders a Container component', () => {
    let wrapper;
    const props = {
      text: 'foo',
      isRequired: true,
      name: 'selectComponentEmployee',
      isSearchable: true,
      options: [],
      isDisabled: false,
      handleOnChange: jest.fn(),
      selectedEmployee: jest.fn(),
      selectedTemplate: jest.fn(),
    };
    wrapper = mount(<SelectContainer {...props} />);
    expect(wrapper.find('SelectContainer')).toHaveLength(1);
  });

  context('Container component receives a callback', () => {
    it('stores the value in state', () => {
      let wrapper;
      const props = {
        text: 'foo',
        isRequired: true,
        name: 'selectComponentEmployee',
        isSearchable: true,
        options: [],
        isDisabled: false,
        handleOnChange: jest.fn(),
        selectedEmployee: jest.fn(),
        selectedTemplate: jest.fn(),
      };

      /*
        REVISIT
      */
      wrapper = mount(<SelectContainer {...props} />);
      wrapper.prop('handleOnChange')({ id: 2, label: 'Bushmills, Robert' });
      const spy = jest.spyOn(wrapper.prop(), 'handleOnChange');
      // wrapper.instance().forceUpdate();
      // console.log(wrapper.state());
      expect(spy).toBeCalledWith('Bushmills, Robert');
      // console.log(wrapper.props('selected'));
      // expect(wrapper.state()).toMatchObject({ selected: { label: 'Dasher' } });
    });
  });

  // let Container;
  // let wrapper;
  // beforeEach(() => {
  //   Container = container(SelectComponent);
  //   wrapper = shallow(
  //     <Container
  //       text="foo"
  //       isRequired
  //       isSearchable
  //       isDisabled={false}
  //       options={[{}]}
  //       name="wrapperComponent"
  //     />,
  //   );
  // });

  // afterEach(() => {
  //   Container = null;
  //   wrapper = null;
  // });
  // it('renders a Wrapper component', () => {
  //   expect(wrapper.props().name).toEqual('wrapperComponent');
  // });

  // it('has empty state', () => {
  //   expect(wrapper.state()).toMatchObject({ selected: {} });
  // });
});
