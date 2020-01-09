import styled from 'styled-components';
import { Button } from 'Common';

const StyledCancelButton = styled(Button)`
  background: transparent;
  border: ${({ theme }) => theme.colors.fontGrey} solid 2px;
  color: ${({ theme }) => theme.colors.fontGrey};
  width: 100%;
`;

export default StyledCancelButton;
