import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { CVModalButtonBar, CVModalContent } from 'Components';
import { Modal } from 'Common';
import container from './container';

export const CVModal = ({ handleCancelClick, isModalOpen, cvURL }) => (
  <Modal isOpen={isModalOpen} title="Preview Document">
    <CVModalContent cvURL={cvURL} />
    <CVModalButtonBar handleCancelClick={handleCancelClick} cvURL={cvURL} />
  </Modal>
);

CVModal.propTypes = {
  handleCancelClick: PT.func.isRequired,
  isModalOpen: PT.bool.isRequired,
  cvURL: PT.func.isRequired,
};

export default container(CVModal);
