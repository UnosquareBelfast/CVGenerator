import React from 'react';

const DownloadButtonContainer = Wrapped =>
  class extends React.Component {
    handleOnClick = () => {
      console.log('download CV');
    };

    render() {
      return <Wrapped handleClick={this.handleOnClick} />;
    }
  };

export default DownloadButtonContainer;
