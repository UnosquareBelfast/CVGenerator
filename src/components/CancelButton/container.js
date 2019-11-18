import React from 'react';
import { PropTypes as PT } from 'prop-types';

const CancelButtonContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      className: PT.string.isRequired,
    };

    state = { isClicked: false };

    handleOnClick = () => {
      this.setState({ isClicked: true });
      console.log('exit modal');
    };

    render() {
      const { className } = this.props;
      const { isClicked } = this.state;
      return (
        <Wrapped handleClick={this.handleOnClick} className={className} isClicked={isClicked} />
      );
    }
  };

export default CancelButtonContainer;
