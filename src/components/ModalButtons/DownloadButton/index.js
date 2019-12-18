import React from 'react';
import { PropTypes as PT } from 'prop-types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { buttonTypes } from 'Constants';
import StyledDownloadButton from './styled';

const downloadCV = uri => {
  const filename = 'foobar.pdf';
  const foo = document.querySelector('.cv-content object');

  html2canvas(foo, { scale: 1 }).then(canvas => {
    const pdf = new jsPDF('p', 'mm', 'a4');

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
    pdf.save(filename);
  });
};

const DownloadButton = ({ className, cvURI }) => {
  return (
    <StyledDownloadButton
      value="Download"
      type={buttonTypes.BUTTON}
      handleClick={() => downloadCV()}
      disabled={false}
      className={className}
    />
  );
};

DownloadButton.propTypes = {
  handleClick: PT.func.isRequired,
  className: PT.string.isRequired,
};

export default DownloadButton;
