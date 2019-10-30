import styled from 'styled-components';

export const StyledSelect = styled.div`
  max-width: 500px;
  min-width: 280px;
  padding: 2em;

  label {
    padding-bottom: 5px;
  }

  .selectedDiv {
    margin-top: 200px;
  }
`;

export const reactSelectCustomStyle = {
  // option: provided => {
  //   return {
  //     ...provided,
  //     padding: 10,
  //   };
  // },
  // control: provided => ({
  //   ...provided,
  //   marginTop: 10,
  // }),
};
