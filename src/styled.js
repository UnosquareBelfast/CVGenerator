import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    green: '#67db7e',
    button: {
      blue: {
        normal: '#608CFF',
        hover: '#7198ff',
        clicked: '#5081FF',
      },
      grey: {
        normal: '#919191',
      },
      disabled: {
        background: '#C4C4C4',
        font: '#919191',
      },
    },
    blue: '#67b7db',
    yellow: '#65db67',
    errorRed: '#ff0000',
    focusedGrey: '#ddd',
    unfocusedWhite: 'rgba(255, 255, 255, 0.75)',
    overlayGrey: 'rgba(68, 68, 68, 0.75)',
    shadowGrey: 'rgba(143,137,143,0.6)',
    shadowButton: '0px 4px 20px rgba(0,3,138,.25)',
    shadowTile: `4px 5px 17px 1px rgba(143,137,143,0.6)`,
    fontBlack: '#000',
    fontWhite: '#FFF',
    backgroundWhite: '#fff',
    backgroundGrey: '#eee',
  },
  effects: {
    transform: 'scale(.97)',
    transition: 'width .3s, height .3s',
  },
  borders: {
    borderGrey: '2px solid grey',
    borderLightGrey: '2px solid #C2C5CC',
    borderModal: '1px solid #ccc',
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
      medium: 500,
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
    display: table-cell;
    font-family: "Varela Round", sans-serif;
    font-size: 19px;
    line-height: 25px;
    margin: 0;
    vertical-align: middle;
  }

  html {
    width: 100%;
    height: 100%;
    display: table;
    margin: auto;
    background-color: ${theme.colors.backgroundGrey};
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
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
