import styled from 'styled-components';
import { device } from 'Themes';

const StyledDownloadButton = styled.a`
  width: 90%;
  text-align: center;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.button.blue.normal};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.fontWhite};
  font-family: ${({ theme }) => theme.fonts.fallback};
  font-size: 18px;
  padding: 10px 0;

  :disabled {
    background-color: ${({ theme }) => theme.colors.button.disabled.background};
    color: ${({ theme }) => theme.colors.button.disabled.font};
  }

  :hover {
    background: ${({ theme }) => theme.colors.button.blue.hover};
    box-shadow: ${({ theme }) => theme.colors.shadowButton};
  }

  :active {
    background: ${({ theme }) => theme.colors.button.blue.clicked};
    transform: ${({ theme }) => theme.effects.transform};
    transition: ${({ theme }) => theme.effects.transition};
  }

  @media ${device.desktopS} {
    min-width: 250px;
  }

  @media ${device.tabletS} {
    margin: 20px 38px 20px 20px;
    max-width: 400px;
    min-width: 175px;
    width: 100%;
  }

  @media ${device.mobileXS} {
    margin-bottom: 20px;
  }
`;

export default StyledDownloadButton;
