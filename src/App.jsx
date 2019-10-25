import { hot } from 'react-hot-loader/root';
import React from 'react';
import Selector from 'Pages/Selector';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Selector />
      </ThemeProvider>
    </div>
  );
};

export default hot(App);
