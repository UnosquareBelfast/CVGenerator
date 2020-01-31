import styled from 'styled-components';
import { device } from 'Themes';

const StyledButtonBar = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 40% !important;

  @media ${device.tabletS} {
    flex-direction: row;
    justify-content: center;
    height: 30% !important;
    width: 90%;
    margin: 50px 5% 0px;
  }
`;

export default StyledButtonBar;
