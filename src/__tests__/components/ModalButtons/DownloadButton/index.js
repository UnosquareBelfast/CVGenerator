import DownloadButton from 'Components/ModalButtons/DownloadButton';
import React from 'react';
import { shallow } from 'enzyme';
import 'SetupTests';

describe('DownloadButton component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DownloadButton />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('renders a download button', () => {
    expect(wrapper.find('Styled(Button)')).toHaveLength(1);
    expect(wrapper.props().value).toEqual('Download');
  });

  it('download button is not disabled', () => {
    expect(wrapper.props().disabled).toEqual(false);
  });
});
