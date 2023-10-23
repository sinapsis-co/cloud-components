import React, { FunctionComponent } from 'react';

import { useIntl } from 'react-intl';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Autocomplete, { AutocompleteOption } from '../form/autocomplete';
import InputField from '../form/input';

/**
 * IconAutocomplete is a component that allows users to search and select icons.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {string[]} props.iconList - The list of available icons.
 * @param {(selectedIcon: string | null) => void} props.onSelect - A callback function to handle icon selection.
 */
interface IconAutocompleteProps {
  iconList: string[];
  onSelect: (selectedIcon: AutocompleteOption) => void;
}

const IconAutocomplete: FunctionComponent<IconAutocompleteProps> = ({ iconList, onSelect }) => {
  const [selectedIcon, setSelectedIcon] = React.useState<AutocompleteOption>();
  const { formatMessage } = useIntl();

  // Make the icon label prettier by capitalizing each word.
  const makePrettierLabel = (label: string) =>
    label
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  // Make a new list of options, with each option having a value and a label.
  const icons = iconList.map((icon) => ({
    value: icon,
    label: makePrettierLabel(icon),
  }));

  return (
    <Autocomplete
      options={icons}
      label={formatMessage({ id: 'COMMON.SELECT_ICON' })}
      // TODO: I don't find a way to stop this renderInput from being required when it's already declared on the father component.
      renderInput={(params) => <InputField {...params} />}
      // Render each option as a list item, showing the icon and its name.
      renderOption={(props, option) => (
        <ListItem {...props} role="option" aria-selected={props['aria-selected']}>
          <ListItemIcon
            className="material-symbols-rounded"
            aria-label={formatMessage({ id: 'COMMON.ICON_NAME' }, { icon: option.label })}
          >
            {option.value}
          </ListItemIcon>
          <ListItemText>{option.label}</ListItemText>
        </ListItem>
      )}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      // When the user selects an option, trigger the onSelect callback.
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
