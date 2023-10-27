import React, { FunctionComponent } from 'react';

import { useIntl } from 'react-intl';

import { InputSizeTypes, inputSize, inputVariant } from '@webapp/configuration/material-ui/input';

import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';

import Autocomplete from '@mui/material/Autocomplete';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { SxProps, Theme, alpha, useTheme } from '@mui/material/styles';

import { AutocompleteOption } from '../form/autocomplete';

/**
 * IconAutocomplete is a component that allows users to search and select icons.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string[]} props.iconList - The list of available icons.
 * @param {AutocompleteOption} props.value - The currently selected icon.
 * @param {InputSizeTypes} props.size - The size of the input.
 * @param {(selectedIcon: AutocompleteOption | null) => void} props.onSelect - A callback function to handle icon selection.
 * @param {SxProps<Theme>} props.sx - Custom style for the component.
 */
interface IconAutocompleteProps {
  iconList: string[];
  value?: AutocompleteOption;
  size?: InputSizeTypes;
  onSelect: (selectedIcon: AutocompleteOption | null) => void;
  sx?: SxProps<Theme>;
}

const IconAutocomplete: FunctionComponent<IconAutocompleteProps> = ({ iconList, value, size, onSelect, sx }) => {
  const theme = useTheme();
  const [selectedIcon, setSelectedIcon] = React.useState<AutocompleteOption | null>(value ? value : null);
  const { formatMessage } = useIntl();

  const makePrettierLabel = (label: string) => {
    return label
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const icons = iconList.map((icon) => ({
    value: icon,
    label: makePrettierLabel(icon),
  }));

  return (
    <Autocomplete
      id="icon-autocomplete"
      options={icons}
      size={size ? size : inputSize}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={inputVariant}
          size={size ? size : inputSize}
          label={formatMessage({ id: 'COMMON.SELECT_ICON' })}
          placeholder={formatMessage({ id: 'COMMON.SELECT_ICON.PLACEHOLDER' })}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                {selectedIcon ? (
                  <span className="material-symbols-rounded" style={{ marginRight: theme.spacing(0.5) }}>
                    {selectedIcon.value}
                  </span>
                ) : null}
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <ListItem {...props} role="option" aria-selected={props['aria-selected']}>
          <ListItemIcon
            className="material-symbols-rounded"
            aria-label={formatMessage({ id: 'COMMON.ICON_NAME' }, { icon: option.label })}
            sx={{ minWidth: theme.spacing(4) }}
          >
            {option.value}
          </ListItemIcon>
          <ListItemText>{option.label}</ListItemText>
        </ListItem>
      )}
      onInputChange={(_, __, reason) => {
        if (reason === 'clear') {
          setSelectedIcon(null);
        }
      }}
      isOptionEqualToValue={(option, value) => option.value === value?.value}
      onChange={(_, selectedIcon) => {
        if (selectedIcon) {
          onSelect(selectedIcon as AutocompleteOption);
          setSelectedIcon(selectedIcon as AutocompleteOption);
        }
      }}
      noOptionsText={formatMessage({ id: 'FORM.NO.OPTION' })}
      forcePopupIcon
      popupIcon={<KeyboardArrowDownRounded sx={{ color: alpha(theme.palette.text.primary, 0.5) }} />}
      filterOptions={(options, state) =>
        options.filter((opt) => (opt.label || '').toLowerCase().includes((state.inputValue || '').toLowerCase()))
      }
      role="combobox"
      aria-label={formatMessage({ id: 'COMMON.SELECT_ICON' })}
      aria-expanded={iconList.length > 0 ? 'true' : 'false'}
      aria-haspopup="listbox"
      sx={{
        minWidth: 300,
        ...sx,
      }}
    />
  );
};

export default IconAutocomplete;
