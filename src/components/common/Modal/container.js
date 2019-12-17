import React from 'react';
import { PropTypes as PT } from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
const ModalContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      isOpen: PT.bool.isRequired,
      title: PT.string.isRequired,
      children: PT.oneOfType([PT.array, PT.object]).isRequired,
      className: PT.string.isRequired,
    };

    render() {
      const { isOpen, title, children, className } = this.props;

      return (
        <Wrapped isOpen={isOpen} title={title} className={className}>
          {children}
        </Wrapped>
      );
    }
  };
/* eslint-enable react/prefer-stateless-function */
export default ModalContainer;
