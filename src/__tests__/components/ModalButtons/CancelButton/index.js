import CancelButton from 'Components/ModalButtons/CancelButton';
import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

describe('CancelButton component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CancelButton />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('renders a cancel button', () => {
    expect(wrapper.find('Styled(Button)')).toHaveLength(1);
    expect(wrapper.props().value).toEqual('Cancel');
  });

  it('cancel button is not disabled', () => {
    expect(wrapper.props().disabled).toEqual(false);
  });
});
