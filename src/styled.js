import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    green: '#67db7e',
    blue: '#67b7db',
    yellow: '#65db67',
    errorRed: '#ff0000',
  },
  fonts: {
    main: 'Open Sans',
    headers: 'Oswald',
    fallback: 'sans-serif',
    pixelSize: {
      h1: 32,
      h2: 24,
      h3: 20,
      h4: 18,
      default: 16,
      small: 14,
      xsmall: 10,
    },
    weight: {
      regular: 400,
      bold: 600,
    },
  },
  mediaQueries: {
    sm: '600px',
    md: '768px',
    lg: '992px',
    xl: '1220px',
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Varela Round", sans-serif;
    font-size: 19px;
    line-height: 20px;
    margin: 0;
  }
  h1 {
    font-size: 40px;
    letter-spacing: 4px;
  }
  h2 {
    font-size: 30px;
  }
`;
