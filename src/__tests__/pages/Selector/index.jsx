import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

import Selector from 'Pages';

describe('SelectParamsForCVTemplate', () => {
  it('renders with hello world', () => {
    const wrapper = shallow(<Selector />);
    expect(wrapper.shallow().text()).toEqual('<SelectComponent />');
  });
});
