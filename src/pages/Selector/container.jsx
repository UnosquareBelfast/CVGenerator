import React from 'react';
import axios from 'axios';

// temporarily disabling this rule until the function is fleshed out
/* eslint-disable react/prefer-stateless-function */
const SelectorContainer = Wrapped =>
  class Selector extends React.Component {
    helloWorldOnClick = () => {
      axios.get('http://localhost:8080/api/hello/1').then(response => {
        console.log('RESPONSE');
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
    };

    render() {
      return <Wrapped onClick={this.helloWorldOnClick} />;
    }
  };

export default SelectorContainer;
/* eslint-enable react/prefer-stateless-function */
