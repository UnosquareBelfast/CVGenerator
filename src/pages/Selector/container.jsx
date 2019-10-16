import React from 'react';

// temporarily disabling this rule until the function is fleshed out
/* eslint-disable react/prefer-stateless-function */
const SelectorContainer = Wrapped =>
  class Selector extends React.Component {
    render() {
      return <Wrapped />;
    }
  };

export default SelectorContainer;
/* eslint-enable react/prefer-stateless-function */
