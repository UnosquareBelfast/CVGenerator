import styled from 'styled-components';

export const SelectorStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-flow: column nowrap;

//background-color: ${props => props.theme.colors.green};
  width: 500px;
`;
export default SelectorStyle;
