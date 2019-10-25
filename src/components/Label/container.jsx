import React from 'react';
import { PropTypes as PT } from 'prop-types';

const LabelContainer = Wrapped =>
  class Label extends React.Component {
    render() {
      const { text } = this.props;
      return <Wrapped text={text} />;
    }
  };

LabelContainer.propTypes = {
  text: PT.string,
};

export default LabelContainer;
