import React from 'react';

const SelectorContainer = Wrapped =>
  class Selector extends React.Component {
    render() {
      return <Wrapped />;
    }
  };

export default SelectorContainer;
