import React from 'react';
import { hot } from 'react-hot-loader/root';
import Selector from './pages/Selector';

import { GlobalStyle } from './styled';

const App = () => (
  <div>
    <GlobalStyle />
    <Selector />
  </div>
);

export default hot(App);
