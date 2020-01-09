import styled from 'styled-components';
import { Button } from 'Common';
import { device } from 'Themes';

const StyledCancelButton = styled(Button)`
  background: transparent;
  border: ${({ theme }) => theme.colors.fontGrey} solid 2px;
  color: ${({ theme }) => theme.colors.fontGrey};
  width: 100%;
  margin-bottom: 0;

  @media ${device.tabletS} {
    margin-bottom: 38px;
  }
`;

export default StyledCancelButton;
