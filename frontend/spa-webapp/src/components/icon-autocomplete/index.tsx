import React, { FunctionComponent } from 'react';

// Destructure useState
import { useIntl } from 'react-intl';

import Autocomplete from '@mui/material/Autocomplete';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

import { AutocompleteOption } from '../form/autocomplete';

/**
 * IconAutocomplete is a component that allows users to search and select icons.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string[]} props.iconList - The list of available icons.
 * @param {(selectedIcon: AutocompleteOption | null) => void} props.onSelect - A callback function to handle icon selection.
 */
interface IconAutocompleteProps {
  iconList: string[];
  onSelect: (selectedIcon: AutocompleteOption | null) => void;
}

const IconAutocomplete: FunctionComponent<IconAutocompleteProps> = ({ iconList, onSelect }) => {
  const theme = useTheme();
  const [selectedIcon, setSelectedIcon] = React.useState<AutocompleteOption | null>(null);
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
      options={icons}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
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
      onInputChange={(event, newInputValue, reason) => {
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
      role="combobox"
      aria-label={formatMessage({ id: 'COMMON.SELECT_ICON' })}
      aria-expanded={iconList.length > 0 ? 'true' : 'false'}
      aria-haspopup="listbox"
      sx={{
        minWidth: 300,
      }}
    />
  );
};

export default IconAutocomplete;
