import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    green: '#67db7e',
    blue: '#67b7db',
    yellow: '#65db67',
    errorRed: '#ff0000',
    focusedGrey: '#ddd',
    fontBlack: '#000',
    fontGrey: '#888',
    backgroundWhite: '#fff',
    backgroundGrey: '#eee',
    buttonBlue: '#24A0ED',
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
    mobileXS: '320px',
    mobileS: '360px',
    mobileM: '375px',
    mobileL: '414px',
    tabletS: '600px',
    tabletM: '768px',
    desktopS: '1280px',
    desktopM: '1440px',
    desktopL: '1920px',
  },
};

export const device = {
  mobileXS: `(min-width: ${theme.mediaQueries.mobileXS})`,
  mobileS: `(min-width: ${theme.mediaQueries.mobileS})`,
  mobileM: `(min-width: ${theme.mediaQueries.mobileM})`,
  mobileL: `(min-width: ${theme.mediaQueries.mobileL})`,
  tabletS: `(min-width: ${theme.mediaQueries.tabletS})`,
  tabletM: `(min-width: ${theme.mediaQueries.tabletM})`,
  desktopS: `(min-width: ${theme.mediaQueries.desktopS})`,
  desktopM: `(min-width: ${theme.mediaQueries.desktopM})`,
  desktopL: `(min-width: ${theme.mediaQueries.desktopL})`,
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Varela Round", sans-serif;
    font-size: 19px;
    line-height: 25px;
    margin: 0;
  }

  h1 {
    font-size: 35px;
    letter-spacing: 4px;
    margin-top: 50px;

    @media ${device.mobileM} {
      font-size: 40px;
    }
  }

  h2 {
    font-size: 30px;
  }
`;
