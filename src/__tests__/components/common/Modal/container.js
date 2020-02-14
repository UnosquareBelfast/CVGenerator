import ModalContainer from 'Common/Modal/container.js';
import Modal from 'Common/Modal/index.js';
import React from 'react';
import { shallow, mount } from 'enzyme';
import 'SetupTests';

describe('ModalContainer component', () => {
  it('passes props to Wrapped component', () => {
    let wrapper;
    const props = {
      isOpen: true,
      title: 'Modal Title',
      children: ['Modal Child'],
      className: 'modal-classname',
    };

    wrapper = mount(
      <ModalContainer {...props}>
        <Modal {...props} />
      </ModalContainer>,
    );

    expect(wrapper.props().children.props.isOpen).toEqual(true);
    expect(wrapper.props().children.props.title).toEqual('Modal Title');
    expect(wrapper.props().children.props.className).toEqual('modal-classname');
    expect(wrapper.props().children.props.children).toContain('Modal Child');
  });
});
