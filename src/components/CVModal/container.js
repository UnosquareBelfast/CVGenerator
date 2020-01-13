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

    state = { cvURL: null };

    componentDidMount() {
      fetchCV().then(data => this.setState({ isModalOpen: false, cvURL: data }));
    }

    componentDidUpdate(prevProps) {
      const { selectedValues } = this.props;
      if (prevProps.selectedValues !== selectedValues) {
        this.setState({ selectedValues, isModalOpen: true });
      }
    }

    handleCancelModal = () => this.setState({ isModalOpen: false });

    render() {
      const { selectedValues, isModalOpen, cvURL } = this.state;

      if (selectedValues && selectedValues.length > 0) {
        return (
          <Wrapped
            selectedValues={selectedValues}
            handleCancelClick={this.handleCancelModal}
            isModalOpen={isModalOpen}
            cvData={cvURL}
          />
        );
      }

      return null;
    }
  };

const mapStateToProps = state => {
  return {
    selectedValues: getSelectedValues(state.GENERATE_CV),
  };
};

export default compose(connect(mapStateToProps), CVModalContainer);
