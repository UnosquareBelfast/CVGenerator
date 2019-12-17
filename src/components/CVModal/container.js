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

    state = { cv: '' };

    componentDidMount() {
      fetchCV().then(data => this.setState({ modalIsOpen: false, cv: data }));
    }

    componentDidUpdate(prevProps) {
      const { employeeCV } = this.props;
      if (prevProps.employeeCV !== employeeCV) {
        this.setState({ employeeCV, modalIsOpen: true });
      }
    }

    handleCancelModal = () => {
      return this.setState({ modalIsOpen: false });
    };

    render() {
      const { employeeCV, modalIsOpen, cv } = this.state;

      return (
        <Wrapped
          employeeCV={employeeCV}
          handleCancelClick={this.handleCancelModal}
          modalIsOpen={modalIsOpen}
          cvData={cv}
        />
      );
    }
  };

const mapStateToProps = state => {
  return {
    employeeCV: getEmployeeCV(state.GENERATE_CV),
  };
};

export default compose(
  connect(mapStateToProps),
  CVModalContainer,
);
