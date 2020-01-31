import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.fallback};
  font-size: 18px;
  margin: 38px;
  padding: 10px 35px;
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.button.blue.normal};
  color: ${({ theme }) => theme.colors.fontWhite};

  :disabled {
    background-color: ${({ theme }) => theme.colors.button.disabled.background};
    color: ${({ theme }) => theme.colors.button.disabled.font};
  }

  :hover {
    background: ${({ theme }) => theme.colors.button.blue.hover};
    box-shadow: ${({ theme }) => theme.colors.shadowButton};
  }

  :active {
    background: ${({ theme }) => theme.colors.button.blue.clicked};
    transform: ${({ theme }) => theme.effects.transform};
    transition: ${({ theme }) => theme.effects.transition};
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background: transparent;
  border: ${({ theme }) => theme.colors.button.grey.normal} solid 2px;
  color: ${({ theme }) => theme.colors.button.grey.normal};
`;
