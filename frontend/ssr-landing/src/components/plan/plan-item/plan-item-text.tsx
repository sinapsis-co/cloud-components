import React, { FunctionComponent } from 'react';

import { SxProps, Theme, styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Wrapper = styled(Box)<{ disabled?: boolean }>(({ theme, disabled }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: disabled ? theme.palette.grey[700] : theme.palette.text.primary,
  '.item-text-icon': {
    marginRight: theme.spacing(2),
    fontSize: theme.spacing(2.5),
  },
}));

interface PlanItemTextProps {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  sx?: SxProps<Theme>;
  small?: boolean;
}

const PlanItemText: FunctionComponent<PlanItemTextProps> = ({ className, children, icon, disabled, sx, small }) => {
  return (
    <Wrapper className={className || ''} disabled={disabled} sx={{ ...sx }}>
      {icon ? <Box className="item-text-icon">{icon}</Box> : null}
      <Typography variant={small ? 'caption' : 'body2'} fontWeight={600}>
        {children}
      </Typography>
    </Wrapper>
  );
};

export default PlanItemText;
