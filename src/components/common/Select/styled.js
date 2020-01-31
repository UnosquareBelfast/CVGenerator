import styled from 'styled-components';
import { theme } from 'Themes';

export const StyledSelect = styled.div`
  max-width: 500px;
  min-width: 280px;
  width: 75%;
  padding: 1em;

  label {
    padding-bottom: 5px;
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
