import styled from 'styled-components';
import { theme } from 'Themes';

export const StyledSelect = styled.div`
  max-width: 500px;
  min-width: 280px;
  padding: 2em;
  width: 100%;

  label {
    padding-bottom: 5px;
  }

  // styling for placeholder. Remove when component is hooked up to API
  .selectedDiv {
    margin-top: 200px;
  }
`;

export const SelectMenuStyles = {
  option: (provided, state) => ({
    ...provided,
    color: theme.colors.fontBlack,
    padding: 20,
    background: state.isFocused ? theme.colors.focusedGrey : theme.colors.backgroundWhite,
  }),
};
