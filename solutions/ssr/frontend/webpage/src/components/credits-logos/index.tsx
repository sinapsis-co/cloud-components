import { FunctionComponent } from 'react';

import { useIntl } from 'react-intl';

import { styled, useTheme } from '@mui/material';

import HPLogo from '@components/icons/hp';
import HPFSLogo from '@components/icons/hp-financial';
import PadovaLogo from '@components/icons/padova';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface HomeCreditsProps {
  className?: string;
}

const HomeCredits: FunctionComponent<HomeCreditsProps> = ({ className }) => {
  const theme = useTheme();
  const intl = useIntl();

  return (
    <Container className={className || ''}>
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        textAlign="center"
        color={theme.palette.secondary.main}
        sx={{
          position: 'relative',
          mb: {
            xs: theme.spacing(4),
            sm: theme.spacing(8),
          },
        }}
      >
        {intl.formatMessage({ id: 'CREDITS.TITLE' })}
      </Typography>
      <Stack gap={{ xs: 4, md: 8 }} direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center">
        <HPLogo style={{ maxWidth: '180px' }} />
        <HPFSLogo style={{ maxWidth: '240px' }} />
        <PadovaLogo style={{ maxWidth: '180px' }} />
      </Stack>
    </Container>
  );
};

export default HomeCredits;

const Container = styled(Stack)(() => {
  return {
    width: '100%',
    margin: 'auto',
    padding: '6rem 0 10rem',
    maxWidth: '1200px',
  };
});
