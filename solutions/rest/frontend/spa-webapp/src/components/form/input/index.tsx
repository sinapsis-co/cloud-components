import { FunctionComponent } from 'react';

// This takes the inputSize and inputVariant from the theme file
import { inputSize, inputVariant } from '@webapp/configuration/material-ui/input';
// Import custom hook
import { useIsMobile } from '@webapp/hooks/is-mobile';

// Import necessary dependencies
import TextField, { TextFieldProps } from '@mui/material/TextField';

type InputFieldProps = {
  className?: string;
  smallMobile?: boolean;
  noDefaultHelperText?: boolean;
  ariaLabel?: string; // Added aria-label prop
} & TextFieldProps;

const InputField: FunctionComponent<InputFieldProps> = ({
  className,
  smallMobile,
  noDefaultHelperText,
  ariaLabel, // Destructured aria-label prop
  ...props
}) => {
  const isMobile = useIsMobile();

  return (
    <TextField
      {...props}
      className={className || ''}
      autoComplete={props.autoComplete}
      name={props.name}
      required={props.required}
      fullWidth={props.fullWidth}
      variant={inputVariant}
      id={props.id}
      label={props.label}
      placeholder={props.placeholder}
      value={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
      error={props.error}
      helperText={noDefaultHelperText ? undefined : props.helperText ? props.helperText : '\u00a0'}
      autoFocus={props.autoFocus}
      aria-label={ariaLabel || props['aria-label']} // Use the provided aria-label or fallback to the prop's aria-label
      size={
        props.size ? props.size : smallMobile ? (isMobile ? (props.size ? props.size : 'small') : inputSize) : inputSize
      }
    />
  );
};

InputField.defaultProps = {
  className: '',
  smallMobile: false,
  noDefaultHelperText: false,
  ariaLabel: '',
};

export default InputField;
