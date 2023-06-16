import { FunctionComponent } from 'react';

import { FormattedMessage } from 'react-intl';

import { Box, Container, Stack, styled, Typography, useTheme } from '@mui/material';

import { motion } from 'framer-motion';
import { easing } from '../framer';
import CreditItem from './credit-item';

interface CreditsListProps {
  className?: string;
}

export const Wrapper = styled(Box)(({ theme }) => {
  return {
    padding: `${theme.spacing(8)} 0`,
    minHeight: 'calc(100vh - 124px - 140px)',
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(4)} 0`,
      minHeight: 'calc(100vh - 124px - 190px)',
    },
  };
});

const CREDITS = [
  {
    author: 'CREDITS_SECTION.LOGO_DESIGN.AUTHOR',
    role: 'CREDITS_SECTION.LOGO_DESIGN.ROLE',
    link: 'https://www.lucadebiasio.it/',
  },
  {
    author: 'CREDITS_SECTION.ARCHITECTURE.AUTHOR',
    role: 'CREDITS_SECTION.ARCHITECTURE.ROLE',
    link: 'https://sinapsis.co/',
  },
  {
    author: 'CREDITS_SECTION.CONCEPT.AUTHOR',
    role: 'CREDITS_SECTION.CONCEPT.ROLE',
    link: 'https://instagram.com/estudioenchastre',
  },
  {
    author: 'CREDITS_SECTION.VIDEO_MUSIC.AUTHOR',
    role: 'CREDITS_SECTION.VIDEO_MUSIC.ROLE',
  },
  {
    author: 'CREDITS_SECTION.IMAGES.AUTHOR',
    role: 'CREDITS_SECTION.IMAGES.ROLE',
  },
  {
    author: 'CREDITS_SECTION.IMAGES_FOR_VIDEO.AUTHOR',
    role: 'CREDITS_SECTION.IMAGES_FOR_VIDEO.ROLE',
  },
  {
    author: 'CREDITS_SECTION.TRANSLATIONS.AUTHOR',
    role: 'CREDITS_SECTION.TRANSLATIONS.ROLE',
  },
  {
    author: 'CREDITS_SECTION.ICONS.AUTHOR',
    role: 'CREDITS_SECTION.ICONS.ROLE',
  },
  {
    author: 'CREDITS_SECTION.SOCIAL.AUTHOR',
    role: 'CREDITS_SECTION.SOCIAL.ROLE',
  },
];

const CreditsList: FunctionComponent<CreditsListProps> = ({ className }) => {
  const theme = useTheme();
  return (
    <Container>
      <Wrapper className={className || ''}>
        <Typography variant="h3" fontWeight={700} color={theme.palette.primary.main}>
          <FormattedMessage id="CREDITS_SECTION.TITLE" />
        </Typography>
        <Stack direction="column" alignItems={'flex-start'} sx={{ mt: 4 }}>
          {CREDITS.map((credit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...easing, delay: index * 0.1 }}
              style={{ width: '100%' }}
            >
              <CreditItem author={credit.author} role={credit.role} hasLink={credit.link} />
            </motion.div>
          ))}
        </Stack>
      </Wrapper>
    </Container>
  );
};

export default CreditsList;
