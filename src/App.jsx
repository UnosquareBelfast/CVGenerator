import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';

import WrappedSelector from 'Pages';

import { GlobalStyle, theme } from './styled';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WrappedSelector />
    </ThemeProvider>
  </>
);

export default hot(App);
