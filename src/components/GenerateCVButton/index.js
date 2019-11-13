import React from 'react';
import { PropTypes as PT } from 'prop-types';
import container from './container';

import Button from '../common/Button';

const GenerateButton = ({ disabled, handleClick }) => {
  return <Button value="Generate CV" disabled={disabled} type="submit" handleClick={handleClick} />;
};

export default container(GenerateButton);

GenerateButton.propTypes = {
  disabled: PT.bool.isRequired,
  handleClick: PT.func.isRequired,
};
