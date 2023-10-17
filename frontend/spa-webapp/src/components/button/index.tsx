import React, { FunctionComponent } from 'react';

import { LoadingButtonProps, default as MuiLoadingButton } from '@mui/lab/LoadingButton';

// This sets the default variant for all buttons in the app.
import { buttonVariant } from '@webapp/configuration/material-ui/button';

export type ButtonColors = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

interface ButtonProps extends LoadingButtonProps {
  className?: string;
  children?: React.ReactNode;
  hasBorder?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ className, children, hasBorder, ...props }) => {
  return (
    <MuiLoadingButton
      className={`${className || ''} ${hasBorder ? 'border' : ''}`}
      variant={props.variant ? props.variant : buttonVariant}
      {...props}
      onKeyDown={(e) => {
        // This is to allow the user to press the space bar or enter key to click the button.
        if (e.key === 'Enter' || e.key === ' ') {
          props.onClick && props.onClick;
        }
      }}
      sx={{ maxHeight: props.size === 'small' ? '40px' : '50px', ...props.sx }}
      aria-label={props['aria-label']} // ARIA attribute to provide a label for the button
    >
      {children}
    </MuiLoadingButton>
  );
};

export default Button;
