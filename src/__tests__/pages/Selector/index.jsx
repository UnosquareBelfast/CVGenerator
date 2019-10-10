import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';

import Selector from '../../../pages/Selector';

describe('SelectParamsForCVTemplate', () => {
  it('renders with hello world', () => {
    const wrapper = shallow(<Selector />);
    expect(wrapper.shallow().text()).toEqual('Hello world!');
  });
});
