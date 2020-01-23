import styled from 'styled-components';
import { device } from 'Themes';

const StyledDownloadButton = styled.a`
  width: 90%;
  margin: 25px 0 0 0;
  text-align: center;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.buttonBlue};
  border-radius: 5px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.fallback};
  font-size: 18px;
  margin: 38px;
  padding: 10px 35px;

  @media ${device.tabletS} {
    margin: 38px
    width: 100%;
  }
`;

export default StyledDownloadButton;
