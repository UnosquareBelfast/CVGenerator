import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Select, Modal } from 'Common';
import { mockDataForSelect, mockDataForModal } from 'Utilities';
import { GenerateCVButton, CancelModalButton, DownloadModalButton } from 'Components';
import container from './container';

import StyledPage from './styled';

const Selector = ({ employees, templates, employeeCV, handleCancelClick, modalIsOpen }) => (
  <StyledPage>
    <h1>CV Generator</h1>
    <div className="selectComponents">
      <Select
        text="Employee"
        isRequired
        name="selectComponentEmployee"
        isSearchable
        isDisabled={false}
        options={employees}
      />
      <Select
        text="Client"
        isRequired
        name="selectComponentClient"
        isSearchable
        isDisabled={false}
        options={mockDataForSelect.clients}
      />
      <Select
        text="Template"
        isRequired
        name="selectComponentTemplate"
        isSearchable
        isDisabled={false}
        options={templates}
      />
      <GenerateCVButton />
    </div>
    <Modal isOpen title="Preview Document" bodyText={mockDataForModal.bodyText}>
      <CancelModalButton className="cancel-button" />
      <DownloadModalButton className="download-button" />
    </Modal>
  </StyledPage>
);

Selector.propTypes = {
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

export default container(Selector);
