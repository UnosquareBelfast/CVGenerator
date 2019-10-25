import styled from 'styled-components';

export const SelectStyle = styled.div`
//background-color: ${props => props.theme.colors.green};
  width: 500px;

  padding: 2em;

`;

export const reactSelectCustomStyle = {
  option: provided => {
    return {
      ...provided,
      padding: 10,
    };
  },
  control: provided => ({
    ...provided,
    marginTop: 10,
  }),
};
