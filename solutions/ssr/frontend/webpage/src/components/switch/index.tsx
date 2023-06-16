import { FunctionComponent } from 'react';

import { alpha, styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { FormattedMessage } from 'react-intl';

import { motion } from 'framer-motion';

const SwitchWrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(4),
  padding: theme.spacing(0.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  overflow: 'hidden',
  justifyContent: 'space-between',
}));

const SwitchTab = styled(Box)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(4),
  zIndex: 1,
  color: alpha(theme.palette.text.primary, 0.25),
  transition: `color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  '&.active, &:hover': {
    color: theme.palette.primary.dark,
  },
  '&.active': {
    cursor: 'default',
  },
}));

const SwitchTabUnderline = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  inset: 0,
  borderRadius: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

export interface SwitchOption {
  label: string;
  value: string;
}

interface SwitchProps {
  className?: string;
  options: SwitchOption[];
  active?: string;
  onClick?: (value: string) => void;
}

const Switch: FunctionComponent<SwitchProps> = ({ className, options, active, onClick }) => {
  return (
    <SwitchWrapper className={className || ''}>
      {options.map((option, index) => (
        <SwitchTab
          className={active === option.value ? 'active' : ''}
          key={index}
          onClick={() => onClick && onClick(option.value)}
        >
          <Typography variant="body1" fontWeight={700}>
            <FormattedMessage id={option.label} />
          </Typography>
          {active === option.value ? (
            <SwitchTabUnderline layoutId="underline" transition={{ type: 'spring', stiffness: 300 }} />
          ) : null}
        </SwitchTab>
      ))}
    </SwitchWrapper>
  );
};

export default Switch;
