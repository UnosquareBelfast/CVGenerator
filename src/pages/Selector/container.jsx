import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchUsers, fetchTemplates } from 'Services';
import { getSelectedValues } from 'Reducers/selectedOptions';

import { transformEmployees, transformTemplates } from './transform';

const SelectorContainer = Wrapped =>
  class extends React.Component {
    static propTypes = {
      selectedEmployee: PT.shape({ id: PT.number, label: PT.string }).isRequired,
      selectedTemplate: PT.shape({ id: PT.number, label: PT.string }).isRequired,
      selectedValues: PT.shape({ id: PT.number, label: PT.string }).isRequired,
    };

    state = { employees: [], templates: [], selectedValues: [], isModalOpen: false };

    componentDidMount() {
      fetchUsers().then(employees => this.setState({ employees }));
      fetchTemplates().then(templates => this.setState({ templates }));
    }

    componentDidUpdate(prevProps) {
      const { selectedValues } = this.props;

      if (prevProps.selectedValues !== selectedValues) {
        this.setState({ selectedValues, isModalOpen: true });
      }
    }

    handleCancelModal = () => this.setState({ isModalOpen: false });

    render() {
      const { employees, templates, selectedValues, isModalOpen } = this.state;

      return (
        <Wrapped
          employees={transformEmployees(employees)}
          templates={transformTemplates(templates)}
          selectedValues={selectedValues}
          handleCancelClick={this.handleCancelModal}
          isModalOpen={isModalOpen}
        />
      );
    }
  };

const mapStateToProps = state => {
  return {
    selectedValues: getSelectedValues(state.GENERATE_CV),
  };
};

export default compose(connect(mapStateToProps), SelectorContainer);
