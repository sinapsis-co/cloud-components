import React, { useEffect } from 'react';

import { motion, useReducedMotion } from 'framer-motion';
import { useIntl } from 'react-intl';

import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';

import { easing, styled, useTheme } from '@mui/material/styles';

import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface PasswordRequirementsProps extends BoxProps {
  password: string;
  hasAutoHide?: boolean;
}

const BADGES = [
  {
    id: 'AUTH.SECURE_PASSWORD.LENGTH',
    regex: /^[\S\s]{8,}/,
  },
  {
    id: 'AUTH.SECURE_PASSWORD.DIGIT',
    regex: /^(.*\d.*)/,
  },
  {
    id: 'AUTH.SECURE_PASSWORD.UPPERCASE',
    regex: /^(.*[A-Z].*)/,
  },
  {
    id: 'AUTH.SECURE_PASSWORD.LOWERCASE',
    regex: /^(.*[a-z].*)/,
  },
];

const ContainerWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[100]}`,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
}));

export const verifyRule = (regex: RegExp, password: string): boolean => {
  return regex.test(password || '');
};

const iconSize = 14;

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ password, hasAutoHide, ...props }) => {
  const ReducedMotion = useReducedMotion(); // Check for reduced motion preference
  const { formatMessage } = useIntl();
  const theme = useTheme();
  const [show, setShow] = React.useState(true);

  const allRulesMet = React.useMemo(() => {
    return BADGES.every((rule) => verifyRule(rule.regex, password));
  }, [password]);

  useEffect(() => {
    if (hasAutoHide) {
      if (allRulesMet) {
        const timer = setTimeout(() => {
          setShow(false);
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      } else {
        setShow(true);
      }
    }
  }, [password, allRulesMet]);

  return (
    <ContainerWrapper {...props} aria-label="Password Requirements">
      <motion.div
        initial={ReducedMotion ? {} : { opacity: 0 }}
        animate={ReducedMotion ? {} : { opacity: show ? 1 : 0 }}
        transition={ReducedMotion ? {} : { duration: 0.5, ...easing }}
        role="status" // Indicate that this section provides a status update.
        aria-live="assertive" // Announce updates immediately to screen readers.
      >
        <Typography sx={{ mb: 1 }} variant="caption" component="h6" fontWeight={600}>
          {formatMessage({ id: 'AUTH.SECURE_PASSWORD.TITLE' })}
        </Typography>
        <Stack direction={{ sm: 'column', md: 'row' }} gap={{ xs: 1, md: 2 }}>
          {BADGES.map((rule, index) => (
            <Stack key={`${index}-${rule.id}`} direction="row" gap={1} alignItems="center">
              {verifyRule(rule.regex, password) ? (
                <CheckCircleRoundedIcon
                  sx={{
                    color: theme.palette.success.main,
                    width: iconSize,
                    height: iconSize,
                  }}
                  aria-label="Requirement met" // Add a label to indicate that the requirement is met.
                />
              ) : (
                <RadioButtonUncheckedRoundedIcon
                  sx={{
                    color: theme.palette.text.primary,
                    width: iconSize,
                    height: iconSize,
                  }}
                  aria-label="Requirement not met" // Add a label to indicate that the requirement is not met.
                />
              )}
              <Typography variant="caption" component="p">
                {formatMessage({ id: rule.id })}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </motion.div>
    </ContainerWrapper>
  );
};

export default PasswordRequirements;
