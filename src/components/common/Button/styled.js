import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.buttonBlue};
  border-radius: 5px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.fallback};
  font-size: 18px;
  margin: 38px;
  padding: 10px 35px;

  :disabled {
    opacity: 0.5;
  }
`;

export default StyledButton;
