import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchCV } from 'Services';
import { getEmployeeCV } from 'Reducers/selected-options';

const CVModalContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      employeeCV: PT.shape({ id: PT.number, label: PT.string }).isRequired,
    };

    state = { cv: null };

    componentDidMount() {
      fetchCV().then(data => this.setState({ isModalOpen: false, cv: data }));
    }

    componentDidUpdate(prevProps) {
      const { employeeCV } = this.props;
      if (prevProps.employeeCV !== employeeCV) {
        this.setState({ employeeCV, isModalOpen: true });
      }
    }

    handleCancelModal = () => {
      return this.setState({ isModalOpen: false });
    };

    render() {
      const { employeeCV, isModalOpen, cv } = this.state;

      if (employeeCV && employeeCV.length >= 1) {
        return (
          <Wrapped
            employeeCV={employeeCV}
            handleCancelClick={this.handleCancelModal}
            isModalOpen={isModalOpen}
            cvData={cv}
          />
        );
      }

      return null;
    }
  };

const mapStateToProps = state => {
  return {
    employeeCV: getEmployeeCV(state.GENERATE_CV),
  };
};

export default compose(connect(mapStateToProps), CVModalContainer);
