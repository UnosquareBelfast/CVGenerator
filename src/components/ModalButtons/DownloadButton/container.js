import React from 'react';

const DownloadButtonContainer = Wrapped =>
  class extends React.Component {
    state = { isClicked: false };

    handleOnClick = () => {
      this.setState({ isClicked: true });
    };

    render() {
      const { isClicked } = this.state;
      return (
        <Wrapped
          handleClick={this.handleOnClick}
          className="download-button"
          isClicked={isClicked}
        />
      );
    }
  };

export default DownloadButtonContainer;
