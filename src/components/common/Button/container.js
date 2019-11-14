import React from 'react';
import { PropTypes as PT } from 'prop-types';

export default Wrapped =>
  class extends React.Component {
    static propTypes = {
      value: PT.string.isRequired,
      disabled: PT.bool.isRequired,
      type: PT.oneOf(['submit', 'button']).isRequired,
    };

    handleOnClick = () => {
      console.log('clicked');
    };

    render() {
      const { value, disabled, type } = this.props;

      return (
        <Wrapped
          value={value}
          disabled={disabled}
          handleClick={() => this.handleOnClick()}
          type={type}
        />
      );
    }
  };
