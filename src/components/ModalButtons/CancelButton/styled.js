import styled from 'styled-components';
import { Button } from 'Common';
import { device } from 'Themes';

const StyledCancelButton = styled(Button)`
  background: transparent;
  border: ${({ theme }) => theme.colors.fontGrey} solid 2px;
  color: ${({ theme }) => theme.colors.fontGrey};
  width: 90%;
  margin: 25px 0 0 0;

  @media ${device.tabletS} {
    margin: 38px
    width: 100%;
  }
`;

export default StyledCancelButton;
