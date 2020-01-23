import styled from 'styled-components';
import { device } from 'Themes';

const StyledButtonBar = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 30% !important;

  @media ${device.tabletS} {
    flex-direction: row;
    margin: 0;
    button,
    a {
      max-width: 160px;
    }
  }
`;

export default StyledButtonBar;
