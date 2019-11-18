import styled from 'styled-components';
import { theme } from 'Themes';
import { Button } from 'Common';

const StyledCancelButton = styled(Button)`
  background: transparent;
  border: ${theme.colors.fontGrey} solid 2px;
  color: ${theme.colors.fontGrey};
`;

export default StyledCancelButton;
