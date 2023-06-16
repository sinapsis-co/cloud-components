import { FunctionComponent } from 'react';

import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { Box, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

interface CreditItemProps {
  className?: string;
  author: string;
  role: string;
  hasLink?: string;
}

export const CreditWrapper = styled(Stack)(({ theme }) => {
  return {
    paddingBlock: theme.spacing(2),
    position: 'relative',
    width: '100%',
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:after': {
      content: '""',
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: 0,
      height: 1,
      width: '100%',
      backgroundColor: theme.palette.divider,
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    },

    '.custom-type': {
      fontSize: '18px',
    },

    '.author-col': {
      [theme.breakpoints.up('md')]: {
        maxWidth: `calc(50% - ${theme.spacing(2)})`,
      },
    },

    '&:hover': {
      '&.has-link': {
        color: theme.palette.primary.main,
        '&:after': {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  };
});

const CreditItem: FunctionComponent<CreditItemProps> = ({ className, author, role, hasLink }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return hasLink ? (
    <motion.div whileHover={{ x: -5 }} whileTap={{ x: 5 }} style={{ width: '100%', color: theme.palette.text.primary }}>
      <a
        href={hasLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: '100%', color: theme.palette.text.primary }}
      >
        <CreditWrapper
          className={`${className || ''} has-link`}
          justifyContent="space-between"
          alignItems={isMobile ? 'flex-start' : 'center'}
          spacing={4}
          direction={isMobile ? 'column' : 'row'}
          sx={{ cursor: hasLink ? 'pointer' : 'default' }}
        >
          <Stack className="author-col" direction="row" alignItems="center" justifyContent="flex-start" gap={2}>
            <Typography className="custom-type" fontWeight={700}>
              <FormattedMessage id={author} />
            </Typography>
            {hasLink ? <OpenInNewRoundedIcon /> : null}
          </Stack>
          <Typography className="custom-type" fontWeight={400} align={isMobile ? 'left' : 'right'}>
            <FormattedMessage id={role} />
          </Typography>
        </CreditWrapper>
      </a>
    </motion.div>
  ) : (
    <CreditWrapper
      className={className || ''}
      justifyContent="space-between"
      alignItems={isMobile ? 'flex-start' : 'center'}
      spacing={4}
      direction={isMobile ? 'column' : 'row'}
      sx={{ width: '100%' }}
    >
      <Box className="author-col">
        <Typography className="custom-type" fontWeight={700}>
          <FormattedMessage id={author} />
        </Typography>
      </Box>
      <Typography className="custom-type" fontWeight={400} align={isMobile ? 'left' : 'right'}>
        <FormattedMessage id={role} />
      </Typography>
    </CreditWrapper>
  );
};

export default CreditItem;
