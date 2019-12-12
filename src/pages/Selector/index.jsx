import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Select, Modal } from 'Common';
import { mockDataForSelect, mockDataForModal } from 'Utilities';
import { GenerateCVButton, CancelModalButton, DownloadModalButton } from 'Components';
import container from './container';

import StyledPage from './styled';

export const UnwrappedSelector = ({
  employees,
  templates,
  employeeCV,
  handleCancelClick,
  modalIsOpen,
}) => (
  <StyledPage>
    <h1>CV Generator</h1>
    <div className="selectComponents">
      <Select
        data-select="select"
        text="Employee"
        isRequired
        name="selectComponentEmployee"
        isSearchable
        isDisabled={false}
        options={employees}
      />
      <Select
        data-select="client"
        text="Client"
        isRequired
        name="selectComponentClient"
        isSearchable
        isDisabled={false}
        options={mockDataForSelect.clients}
      />
      <Select
        data-select="template"
        text="Template"
        isRequired
        name="selectComponentTemplate"
        isSearchable
        isDisabled={false}
        options={templates}
      />
      <GenerateCVButton data-button="generate-cv" />
    </div>
    {employeeCV.length >= 1 && (
      <Modal isOpen={modalIsOpen} title="Preview Document" bodyText={mockDataForModal.bodyText}>
        <CancelModalButton handleClick={handleCancelClick} />
        <DownloadModalButton />
      </Modal>
    )}
  </StyledPage>
);

UnwrappedSelector.propTypes = {
  employees: PT.arrayOf(
    PT.shape({
      id: PT.number,
      label: PT.string,
    }),
  ).isRequired,
  templates: PT.arrayOf(
    PT.shape({
      id: PT.number,
      label: PT.string,
    }),
  ).isRequired,
  employeeCV: PT.arrayOf(
    PT.shape({
      id: PT.number,
      label: PT.string,
    }),
  ).isRequired,
  handleCancelClick: PT.func.isRequired,
  modalIsOpen: PT.bool.isRequired,
};

const WrappedSelector = container(UnwrappedSelector);

export default WrappedSelector;
