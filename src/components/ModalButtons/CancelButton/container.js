import React from 'react';

const CancelButtonContainer = Wrapped =>
  class extends React.Component {
    state = { isClicked: false };

    handleOnClick = () => {
      this.setState({ isClicked: true });
    };

    render() {
      const { isClicked } = this.state;
      return (
        <Wrapped handleClick={this.handleOnClick} className="cancel-button" isClicked={isClicked} />
      );
    }
  };

export default CancelButtonContainer;
