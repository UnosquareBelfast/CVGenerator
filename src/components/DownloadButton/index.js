import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { buttonTypes } from 'Constants';
import { Button } from 'Common';
import container from './container';

const DownloadModalButton = ({ handleClick }) => {
  return (
    <Button value="Download" type={buttonTypes.BUTTON} handleClick={handleClick} disabled={false} />
  );
};

DownloadModalButton.propTypes = {
  handleClick: PT.func.isRequired,
};

export default container(DownloadModalButton);
