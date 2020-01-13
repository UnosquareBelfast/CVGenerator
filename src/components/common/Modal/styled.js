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
    background-color: ${({ theme }) => theme.colors.overlayGrey};
    overflow: scroll;
  }
  &__content {
    position: absolute;
    background: #fff;
    outline: none;
    border-radius: 10px;
    height: 90%;
    margin-bottom: 50px;

    div {
      height: 80%;
    }

    .modal-content {
      height: 100%;
      .cv-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60%;
        width: 100%;
        object {
          width: 90%;
          height: 100%;
          margin: 20px;
        }
      }

      // @media ${device.tabletS} {
      //   .modal-content: {
      //     height: 90%;
      //   }
      // }
    }
    @media ${device.mobileXS} {
      top: 100px;
      left: 20px;
      right: 20px;
      bottom: 80px;
    }
    @media ${device.tabletS} {
      left: 40px;
      right: 40px;
    }
  }
  .button-bar {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 40%;
    @media ${device.tabletS} {
      flex-direction: row;
      margin: 0;
      button {
        max-width: 160px;
      }
    }
  }
  h1 {
    border-bottom: ${({ theme }) => theme.borders.borderGrey};
    padding-bottom: 10px;
    text-align: center;
  }
`;

export default StyledModal;
