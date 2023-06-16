import React, { FunctionComponent } from 'react';

import { SxProps, Theme, styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.primary,
  '&.fullwidth': {
    width: '100%',
    '& .text': {
      width: '100%',
    },
  },
  '& .icon': {
    color: theme.palette.text.primary,
    '&.disabled': {
      color: theme.palette.grey[500],
    },
  },
  '& .text': {
    '&.dotted': {
      borderBottom: `2px dotted ${theme.palette.grey[400]}`,
    },
  },
}));

interface CheckItemProps {
  className?: string;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  small?: boolean;
  hasDottedLine?: boolean;
  fullWidth?: boolean;
}

const CheckItem: FunctionComponent<CheckItemProps> = ({
  className,
  leftIcon,
  children,
  disabled,
  sx,
  small,
  hasDottedLine,
  fullWidth,
}) => {
  return (
    <Wrapper className={`${className || ''} ${fullWidth ? 'fullwidth' : ''}`} sx={{ ...sx }}>
      {leftIcon ? leftIcon : null}
      <Typography
        className={`text ${hasDottedLine ? 'dotted' : ''}`}
        variant={small ? 'caption' : 'body1'}
        fontWeight={500}
      >
        {children}
      </Typography>
      <CheckCircleOutlineRoundedIcon className={`icon ${disabled ? 'disabled' : ''}`} fontSize="small" />
    </Wrapper>
  );
};

export default CheckItem;
