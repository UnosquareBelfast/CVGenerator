import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  div {
    color: ${({ theme }) => theme.colors.errorRed};
  }
`;
export default StyledLabel;
