import React from 'react';
// import { PropTypes as PT } from 'prop-types';
import Modal from 'react-modal';
import { TestModal } from 'Common';
// import { Select } from 'Common';
// import { mockDataForSelect } from 'Utilities';
// import GenerateCVButton from 'Components';
import container from './container';

import StyledPage from './styled';

Modal.setAppElement('#root');

// const Selector = ({ employees, templates, renderModal }) => {
//   console.log('renderModal: ', renderModal);
//   return (
//     <StyledPage>
//       {/* <TestModal /> */}
//       <h1>CV Generator</h1>
//       <div className="selectComponents">
//         <Select
//           text="Employee"
//           isRequired
//           name="selectComponentEmployee"
//           isSearchable
//           isDisabled={false}
//           options={employees}
//         />
//         <Select
//           text="Client"
//           isRequired
//           name="selectComponentClient"
//           isSearchable
//           isDisabled={false}
//           options={mockDataForSelect.clients}
//         />
//         <Select
//           text="Template"
//           isRequired
//           name="selectComponentTemplate"
//           isSearchable
//           isDisabled={false}
//           options={templates}
//         />
//         <GenerateCVButton />
//       </div>
//     </StyledPage>
//   );
// };

const Selector = () => {
  return (
    <StyledPage>
      <TestModal />
    </StyledPage>
  );
};

// Selector.propTypes = {
//   employees: PT.arrayOf(
//     PT.shape({
//       id: PT.number,
//       label: PT.string,
//     }),
//   ).isRequired,
//   templates: PT.arrayOf(
//     PT.shape({
//       id: PT.number,
//       label: PT.string,
//     }),
//   ).isRequired,
//   renderModal: PT.bool.isRequired,
// };

export default container(Selector);
