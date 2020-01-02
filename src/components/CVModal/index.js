import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { CancelModalButton, DownloadModalButton } from 'Components';
import { Modal } from 'Common';
import container from './container';

export const CVModal = ({ handleCancelClick, isModalOpen, cvData }) => {
  return (
    <Modal isOpen={isModalOpen} title="Preview Document">
      <div className="modal-content">
        <div className="cv-content">
          <object data={cvData} title="CV Data" />
        </div>
        <div className="button-bar">
          <CancelModalButton className="cancel-button" handleClick={handleCancelClick} />
          <DownloadModalButton className="download-button" />
        </div>
      </div>
    </Modal>
  );
};

CVModal.propTypes = {
  handleCancelClick: PT.func.isRequired,
  isModalOpen: PT.bool.isRequired,
  cvData: PT.func.isRequired,
};

export default container(CVModal);
