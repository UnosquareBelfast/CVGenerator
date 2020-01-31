import styled from 'styled-components';
import { device } from 'Themes';

const StyledPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 375px;

  h1 {
    width: 100%;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
    margin-left: 10px;
    font-size: 45px;
    margin-bottom: 40px;
  }

  .selectComponents {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
    width: 70%;
    min-width: 400px;
    max-width: 630px;
    padding: 15% 0 5%;

    -webkit-box-shadow: ${({ theme }) => theme.colors.shadowTile};
    -moz-box-shadow: ${({ theme }) => theme.colors.shadowTile};
    box-shadow: ${({ theme }) => theme.colors.shadowTile};

    @media ${device.tabletS} {
      min-width: 600px;
    }
  }
`;

export default StyledPage;
