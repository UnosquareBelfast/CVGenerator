import Modal from 'Common/Modal/index.js';
import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

describe('Modal component', () => {
  let props, wrapper;

  beforeEach(() => {
    props = {
      isOpen: true,
      title: 'Modal Title',
      children: ['Modal Child'],
    };

    wrapper = shallow(<Modal {...props} />);
  });

  afterEach(() => {
    props = null;
    wrapper = null;
  });

  it('renders a modal component', () => {
    expect(wrapper.find('[data-modal="modal"]')).toHaveLength(1);
  });

  it('renders props', () => {
    expect(wrapper.prop('isOpen')).toEqual(true);
    expect(wrapper.prop('title')).toEqual('Modal Title');
    expect(wrapper.text()).toEqual('Modal Child');
  });
});
