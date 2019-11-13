import React from 'react';

export default Wrapped =>
  class extends React.Component {
    isDisabled = () => {
      // logic added in next PR
      return false;
    };

    handleOnClick = () => {
      // logic added in next PR
      console.log('click');
    };

    render() {
      return <Wrapped disabled={this.isDisabled()} handleClick={() => this.handleOnClick()} />;
    }
  };
