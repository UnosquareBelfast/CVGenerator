import { Label } from 'Common';
import React from 'react';
import { shallow } from 'enzyme';
import context from 'jest-context';
import 'SetupTests';

describe('Label component', () => {
  let props, wrapper;

  context('Label is required', () => {
    beforeEach(() => {
      props = {
        text: 'label text',
        isRequired: true,
      };

      wrapper = shallow(<Label {...props} />);
    });

    afterEach(() => {
      props = null;
      wrapper = null;
    });

    it('renders a Label component', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.text()).toContain('label text');
    });

    it('renders an asterisk', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find('span').text()).toEqual('*');
    });
  });

  context('Label is not required', () => {
    beforeEach(() => {
      props = {
        text: 'label text',
        isRequired: false,
      };

      wrapper = shallow(<Label {...props} />);
    });

    afterEach(() => {
      props = null;
      wrapper = null;
    });

    it('renders a Label component', () => {
      expect(wrapper).toHaveLength(1);
    });

    it('does not render an asterisk', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find('span')).toHaveLength(0);
    });
  });
});
