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
    height: 100%;

    max-height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    width: 90%;

    div {
      height: 80%;
    }

    @media ${device.desktopL} {
      width: 50%;
    }

    @media ${device.tabletS} {
      width: 70%;
    }
  }

  h1 {
    border-bottom: ${({ theme }) => theme.borders.borderGrey};
    height: 10%;
    text-align: center;
    font-weight: 500;
  }
`;

export default StyledModal;
