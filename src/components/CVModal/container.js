import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchCV } from 'Services';
import { getSelectedValues } from 'Reducers/selectedOptions';

const CVModalContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      selectedValues: PT.shape({ id: PT.number, label: PT.string }).isRequired,
    };

    state = { cvURL: null, isModalOpen: false };

    componentDidUpdate(prevProps) {
      const { selectedValues } = this.props;

      if (prevProps.selectedValues !== selectedValues) {
        this.setState({ selectedValues, isModalOpen: true });
        fetchCV().then(data => this.setState({ isModalOpen: true, cvURL: data }));
      }
    }

    handleCancelModal = () => this.setState({ isModalOpen: false });

    render() {
      const { selectedValues, isModalOpen, cvURL } = this.state;

      return (
        <Wrapped
          selectedValues={selectedValues}
          handleCancelClick={this.handleCancelModal}
          isModalOpen={isModalOpen}
          cvURL={cvURL}
        />
      );
    }
  };

const mapStateToProps = state => {
  return {
    selectedValues: getSelectedValues(state.GENERATE_CV),
  };
};

export default compose(connect(mapStateToProps), CVModalContainer);
