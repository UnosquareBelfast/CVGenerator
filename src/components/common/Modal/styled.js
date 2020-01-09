import styled from 'styled-components';
import { device } from 'Themes';
import ReactModalAdapter from './modal';

export const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: ${({ theme }) => theme.colors.unfocusedWhite};
  }
  &__content {
    position: absolute;
    border: ${({ theme }) => theme.borders.borderModal};
    background: #fff;
    overflow: auto;
    outline: none;
    padding: 20px;

    @media ${device.mobileXS} {
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
    }

    @media ${device.tabletS} {
      top: 40px;
      left: 40px;
      right: 40px;
      bottom: 40px;
    }
  }
  .button-bar {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media ${device.tabletS} {
      flex-direction: row;
      margin: 38px 38px 0 38px;
      button {
        max-width: 160px;
      }
    }
  }
  h1 {
    border-bottom: ${({ theme }) => theme.borders.borderGrey};
    padding-bottom: 10px;
  }
`;

export default StyledModal;
