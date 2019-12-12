import { UnwrappedSelector as Selector } from 'Pages/Selector';
import context from 'jest-context';
import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

describe('Select component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Selector
        employeeCV={[{ id: 2, label: 'Bushmills, Robert' }, { id: 2, label: 'cvtemplate' }]}
      />,
    );
  });

  afterEach(() => {
    wrapper = null;
  });
  it('returns an h1', () => {
    expect(wrapper.find('h1').props().children).toContain('CV Generator');
  });

  it('returns 3 Select components', () => {
    expect(wrapper.find('Connect(_class)[data-select="select"]').props().name).toContain(
      'selectComponentEmployee',
    );
    expect(wrapper.find('Connect(_class)[data-select="client"]').props().name).toContain(
      'selectComponentClient',
    );
    expect(wrapper.find('Connect(_class)[data-select="template"]').props().name).toContain(
      'selectComponentTemplate',
    );
  });

  it('returns a Generate CV button', () => {
    expect(wrapper.find('Connect(_class)[data-button="generate-cv"]')).toHaveLength(1);
  });

  context('component passed CV data', () => {
    it('returns a modal component', () => {
      expect(wrapper.find('Modal')).toHaveLength(1);
    });
  });

  context('empty CV data array passed to component', () => {
    it('does not return a modal component', () => {
      let selectorPageWithoutModal;
      selectorPageWithoutModal = shallow(<Selector employeeCV={[]} />);

      expect(selectorPageWithoutModal.find('Modal')).toHaveLength(0);
    });
  });
});
