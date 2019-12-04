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
    background-color: rgba(255, 255, 255, 0.75);
  }
  &__content {
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    borderradius: 4px;
    outline: none;
    padding: 20px;
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
    border-bottom: 2px solid grey;
    padding-bottom: 10px;
  }
`;

export default StyledModal;
