import React from 'react';
import { PropTypes as PT } from 'prop-types';

export default Wrapped =>
  class extends React.Component {
    static propTypes = {
      text: PT.string.isRequired,
      isRequired: PT.bool.isRequired,
      name: PT.string,
      isSearchable: PT.bool.isRequired,
      isDisabled: PT.bool.isRequired,
      options: PT.arrayOf(PT.object).isRequired,
    };

    static defaultProps = {
      name: 'selectComponent',
    };

    state = { selected: {} };

    handleOnChange = e => {
      this.setState({ selected: e });
    };

    render() {
      const { text, isRequired, name, isSearchable, isDisabled, options } = this.props;
      const { selected } = this.state;
      return (
        <Wrapped
          selected={selected}
          handleOnChange={this.handleOnChange}
          text={text}
          isRequired={isRequired}
          name={name}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          options={options}
        />
      );
    }
  };
