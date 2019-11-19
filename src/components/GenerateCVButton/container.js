import React from 'react';

export default Wrapped =>
  class extends React.Component {
    handleOnClick = () => {
      // logic added in next PR
      console.log('click');
    };

    isDisabled = () => {
      // logic added in next PR
      return false;
    };

    render() {
      return <Wrapped disabled={this.isDisabled()} handleClick={this.handleOnClick} />;
    }
  };
