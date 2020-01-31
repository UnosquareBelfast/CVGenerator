import styled from 'styled-components';
import { Button } from 'Common';
import { device } from 'Themes';

const StyledCancelButton = styled(Button)`
  background: transparent;
  width: 90%;
  margin: 20px 38px 20px 38px;
  padding-left: 0;
  padding-right: 0;

  @media ${device.desktopS} {
    margin: 38px 30px 20px 38px;
    max-width: 400px;
    min-width: 250px;
    width: 100%;
  }

  @media ${device.tabletS} {
    margin: 20px 20px 20px 38px;
    max-width: 400px;
    min-width: 175px;
    width: 100%;
  }
`;

export default StyledCancelButton;
