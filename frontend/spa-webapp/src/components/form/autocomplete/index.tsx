import React, { FunctionComponent } from 'react';

import { FormattedMessage } from 'react-intl';

import { inputSize, inputVariant } from '@webapp/configuration/material-ui/input';

import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';

import { Autocomplete as MuiAutocomplete, AutocompleteProps as MuiAutocompleteProps } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import InputField from '../input';

/**
 * Represents an option in the Autocomplete component.
 */
export interface AutocompleteOption {
  label: string;
  value: string;
}

/**
 * Props for the Autocomplete component.
 */
interface AutocompleteProps<T>
  extends MuiAutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined> {
  className?: string;
  label?: React.ReactNode;
  inputName?: string;
  startIcon?: React.ReactNode;
  error?: boolean;
  noDefaultHelperText?: boolean;
}

/**
 * Autocomplete is a component that provides auto-suggestions based on user input.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string} props.className - Additional CSS classes for styling.
 * @param {React.ReactNode} props.label - The label for the input field.
 * @param {string} props.inputName - The name for the input field.
 * @param {React.ReactNode} props.startIcon - The icon to display at the start of the input field.
 * @param {boolean} props.error - Indicates if there is an error.
 * @param {boolean} props.noDefaultHelperText - Disables default helper text.
 * @param {AutocompleteOption[]} props.options - The list of available options.
 * @param {string} props.id - The unique ID for the component.
 * @param {string} props.value - The current value of the component.
 * @param {(event: React.ChangeEvent<{}>, newValue: T | null) => void} props.onInputChange - Called when input changes.
 * @param {(event: React.ChangeEvent<{}>, newValue: T | null) => void} props.onChange - Called when a value is selected.
 * @param {object} props.sx - Additional CSS styling.
 */
const Autocomplete: FunctionComponent<AutocompleteProps<AutocompleteOption>> = ({
  className,
  label,
  inputName,
  startIcon,
  error = false,
  noDefaultHelperText,
  ...props
}) => {
  const theme = useTheme();
  return (
    <MuiAutocomplete
      {...props}
      className={className || ''}
      options={props.options}
      sx={{ position: 'relative', zIndex: '500', ...props.sx }}
      size={inputSize}
      // fullWidth={true}
      id={props.id}
      value={props.value}
      noOptionsText={<FormattedMessage id="FORM.NO.OPTION" />}
      onInputChange={props.onInputChange}
      onChange={props.onChange}
      popupIcon={<KeyboardArrowDownRounded sx={{ color: alpha(theme.palette.text.primary, 0.5) }} fontSize="small" />}
      renderOption={(props, option, state) => {
        return (
          <li {...props} key={`listItem-${option}-${state.index}`} role="option" aria-selected={state.selected}>
            {option.label}
          </li>
        );
      }}
      filterOptions={(options, state) =>
        options.filter((opt) => (opt.label || '').toLowerCase().includes((state.inputValue || '').toLowerCase()))
      }
      renderInput={(params) => (
        <InputField
          {...params}
          key={params.id}
          label={label}
          name={inputName}
          error={error}
          variant={inputVariant}
          spellCheck={false}
          fullWidth={true}
          // InputLabelProps={{ shrink: false }}
          noDefaultHelperText={noDefaultHelperText}
          role="combobox"
          aria-autocomplete="both"
          aria-expanded={props.options.length > 0 ? 'true' : 'false'}
          aria-haspopup="listbox"
        />
      )}
    />
  );
};

export default Autocomplete;
