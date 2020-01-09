import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { StyledModal } from './styled';

const Modal = ({ isOpen, title, bodyText, children }) => {
  return (
    <StyledModal isOpen={isOpen} title={title} bodyText={bodyText}>
      <div className="button-bar">{children}</div>
    </StyledModal>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PT.bool.isRequired,
  title: PT.string.isRequired,
  bodyText: PT.string.isRequired,
  children: PT.oneOfType([PT.array, PT.object]).isRequired,
};
