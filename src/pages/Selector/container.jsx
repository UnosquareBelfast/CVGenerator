import React from 'react';
import { transformEmployees as transform } from './transform-employees';

const SelectorContainer = Wrapped =>
  class extends React.Component {
    state = { employees: [] };

    componentDidMount() {
      this.fetchEmployees();
    }

    fetchEmployees = () => {
      fetch('http://localhost:8081/api/users').then(resp => {
        resp.json().then(json => this.setState({ employees: json }));
      });
    };

    render() {
      const { employees } = this.state;

      return <Wrapped employees={transform(employees)} />;
    }
  };

export default SelectorContainer;
