import ModalComponent from 'Common/Modal/modal.js';
import React from 'react';
import Modal from 'react-modal';
import { shallow, mount } from 'enzyme';
import 'SetupTests';

describe('Modal component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      isOpen: true,
      title: 'Modal Title',
      children: ['Modal Child1', 'Modal Child2'],
      className: 'modal-classname',
    };

    wrapper = shallow(
      <ModalComponent {...props}>
        <Modal {...props} />
      </ModalComponent>,
    );
  });

  afterEach(() => {
    props = null;
    wrapper = null;
  });

  it('returns a react-modal component', () => {
    expect(wrapper.find('Modal')).toHaveLength(1);
  });

  it('passes a title prop to a react-modal component', () => {
    expect(wrapper.prop('title')).toEqual('Modal Title');
  });

  it('passes children to a react-modal component', () => {
    expect(wrapper.props().children.props.children).toContain('Modal Child1');
    expect(wrapper.props().children.props.children).toContain('Modal Child2');
  });

  it('passes required classNames to react-modal component', () => {
    wrapper = mount(
      <ModalComponent {...props}>
        <Modal {...props} />
      </ModalComponent>,
    );

    expect(wrapper.find('Modal').get(0).props.overlayClassName).toEqual('modal-classname__overlay');
    expect(wrapper.find('Modal').get(0).props.portalClassName).toEqual('modal-classname');
    expect(wrapper.find('Modal').get(0).props.className).toEqual('modal-classname__content');
  });
});
