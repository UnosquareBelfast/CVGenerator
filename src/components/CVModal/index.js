import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { CancelModalButton, DownloadModalButton } from 'Components';
import { Modal } from 'Common';
import container from './container';

export const CVModal = ({ employeeCV, handleCancelClick, modalIsOpen, cvData }) => {
  if (employeeCV && employeeCV.length >= 1) {
    return (
      <Modal isOpen={modalIsOpen} title="Preview Document">
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
  }

  return null;
};

CVModal.propTypes = {
  employeeCV: PT.arrayOf(
    PT.shape({
      id: PT.number,
      label: PT.string,
    }),
  ).isRequired,
  handleCancelClick: PT.func.isRequired,
  modalIsOpen: PT.bool.isRequired,
  cvData: PT.func.isRequired,
};

export default container(CVModal);
