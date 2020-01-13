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

  h1 {
    border-bottom: ${({ theme }) => theme.borders.borderGrey};
    padding-bottom: 10px;
    text-align: center;
  }
`;

export default StyledModal;
