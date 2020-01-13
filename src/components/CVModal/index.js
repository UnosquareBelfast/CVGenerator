import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { CVModalButtonBar, CVModalContent } from 'Components';
import { Modal } from 'Common';
import container from './container';

export const CVModal = ({ handleCancelClick, isModalOpen, cvData }) => (
  <Modal isOpen={isModalOpen} title="Preview Document">
    <CVModalContent cvData={cvData} />
    <CVModalButtonBar handleCancelClick={handleCancelClick} />
  </Modal>
);

CVModal.propTypes = {
  handleCancelClick: PT.func.isRequired,
  isModalOpen: PT.bool.isRequired,
  cvData: PT.func.isRequired,
};

export default container(CVModal);
