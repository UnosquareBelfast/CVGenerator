import React from 'react';
import fetchUsers from 'Services';
import { transformEmployees as transform } from './transform-employees';

const SelectorContainer = Wrapped =>
  class extends React.Component {
    state = { employees: [] };

    componentDidMount() {
      fetchUsers().then(employees => this.setState({ employees }));
    }

    render() {
      const { employees } = this.state;

      return <Wrapped employees={transform(employees)} />;
    }
  };

export default SelectorContainer;
