import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { LabelStyle } from './styled';
import container from './container';

const Label = props => {
  const { text } = props;

  return <LabelStyle>{text}</LabelStyle>;
};

Label.propTypes = {
  text: PT.string.isRequired,
};
export default container(Label);
