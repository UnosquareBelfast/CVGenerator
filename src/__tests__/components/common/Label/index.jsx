import React from 'react';
import { shallow } from 'enzyme';
import context from 'jest-context';
import 'SetupTests';

import Label from 'Common';

describe('Label component', () => {
  context('Required prop value is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Label text="My Label Text" isRequired />);
    });

    afterEach(() => {
      wrapper = null;
    });
    it('renders Label text', () => {
      expect(wrapper.text()).toMatch('My Label Text');
    });

    it('renders a required symbol', () => {
      expect(wrapper.props().children[2].props).toMatchObject({ children: '*' });
    });
  });

  context('Required prop value is false', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Label text="My Label Text" isRequired={false} />);
    });

    afterEach(() => {
      wrapper = null;
    });
    it('renders Label text', () => {
      expect(wrapper.text()).toMatch('My Label Text');
    });

    it('does not render a required symbol', () => {
      expect(wrapper.props().children[2]).toEqual(false);
    });
  });
});
