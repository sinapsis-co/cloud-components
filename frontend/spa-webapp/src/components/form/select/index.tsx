import React, { FunctionComponent } from 'react';

import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';

import { SxProps, Theme, alpha, styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { default as MuiSelect, SelectProps as MuiSelectProps } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

interface SelectProps extends MuiSelectProps {
  className?: string;
  id: string;
  label?: React.ReactNode;
  value: string;
  options?: {
    value: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
  }[];
  sx?: SxProps<Theme>;
  ariaLabel?: string;
}

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  '& .MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
}));

const Select: FunctionComponent<SelectProps> = ({ className, id, label, value, options, sx, ariaLabel, ...props }) => {
  const theme = useTheme();
  return (
    <FormControl
      className={className || ''}
      fullWidth={props.fullWidth}
      sx={{ ...sx }}
      disabled={props.disabled}
      size={props.size}
      aria-labelledby={`${id}-label`} // ARIA attribute to associate the label with the select
    >
      {label ? <InputLabel id={`${id}-label`}>{label}</InputLabel> : null}
      <StyledSelect
        labelId={`${id}-label`}
        id={`${id}-select`}
        value={value}
        label={label}
        onChange={props.onChange}
        displayEmpty={props.displayEmpty}
        placeholder={props.placeholder}
        renderValue={
          value || value !== ''
            ? undefined
            : () => <Typography color={alpha(theme.palette.text.primary, 0.5)}>{props.placeholder}</Typography>
        }
        IconComponent={(props) => (
          <KeyboardArrowDownRounded
            {...props}
            sx={{ pointerEvents: 'auto', color: alpha(theme.palette.text.primary, 0.5), mr: 1.5 }}
            fontSize="small"
          />
        )}
        fullWidth={props.fullWidth}
        {...props}
        aria-label={ariaLabel} // ARIA attribute for a custom label
        role="combobox" // ARIA role for a combobox
        aria-expanded={props.open} // ARIA attribute indicating if the combobox is expanded
        aria-haspopup="listbox" // ARIA attribute indicating the presence of a listbox
      >
        {options?.map((option, index) => (
          <MenuItem
            value={option.value}
            key={`${option.value}-${index}`}
            disabled={option.disabled}
            sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
            role="option" // ARIA role for an option within a listbox
            aria-selected={value === option.value} // ARIA attribute indicating if the option is selected
          >
            {option.icon ? (
              <Box className="icon-wrapper" sx={{ mr: 1, maxWidth: 16, flexGrow: 0 }}>
                {option.icon}
              </Box>
            ) : null}
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default Select;
