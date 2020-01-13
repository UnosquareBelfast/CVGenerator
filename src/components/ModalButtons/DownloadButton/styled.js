import styled from 'styled-components';
import { Button } from 'Common';
import { device } from 'Themes';

const StyledDownloadButton = styled(Button)`
  width: 90%;
  margin: 25px 0 0 0;
  @media ${device.tabletS} {
    margin: 38px
    width: 100%;
  }
`;

export default StyledDownloadButton;
