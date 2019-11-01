import styled from 'styled-components';

const StyledPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .selectComponents {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    width: 70%;
    min-width: 400px;
    max-width: 630px;
  }
`;

export default StyledPage;
