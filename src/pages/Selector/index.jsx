import React from 'react';
import { PropTypes as PT } from 'prop-types';
import Button from '../../components/common/Button';
import container from './container';

const Selector = props => {
  const { onClick } = props;
  return <Button onClick={onClick} label="Hello World!" />;
};

Selector.propTypes = {
  onClick: PT.func.isRequired,
};

export default container(Selector);
