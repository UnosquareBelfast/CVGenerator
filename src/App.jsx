import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';

import Selector from 'Pages';

import { GlobalStyle, theme } from './styled';

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Selector />
    </ThemeProvider>
  </div>
);

export default hot(App);
