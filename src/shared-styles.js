import { css } from 'styled-components';
import { theme } from 'Themes';

const sharedButtonStyle = css`
  background: ${theme.colors.buttonBlue};
  border-radius: 5px;
  color: white;
  font-family: ${theme.fonts.fallback};
  font-size: 18px;
  margin: 38px;
  padding: 10px 35px;
`;

export default sharedButtonStyle;
