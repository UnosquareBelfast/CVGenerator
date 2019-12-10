import React from 'react';
import { PropTypes as PT } from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
const ModalContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      isOpen: PT.bool.isRequired,
      title: PT.string.isRequired,
      bodyText: PT.string.isRequired,
      children: PT.oneOfType([PT.array, PT.object]).isRequired,
      className: PT.string.isRequired,
    };

    render() {
      const { isOpen, title, bodyText, children, className } = this.props;

      return (
        <Wrapped isOpen={isOpen} title={title} bodyText={bodyText} className={className}>
          {children}
        </Wrapped>
      );
    }
  };
/* eslint-enable react/prefer-stateless-function */
export default ModalContainer;
