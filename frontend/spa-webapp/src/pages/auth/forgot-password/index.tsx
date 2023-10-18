import React, { FunctionComponent, useState } from 'react';

import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import ForgotPasswordImgLight from '@webapp/assets/images/content/forgot-password-light.webp';
import ForgotPasswordImg from '@webapp/assets/images/content/forgot-password.webp';
import FormWrapper from '@webapp/components/auth/form-wrapper';
import Button from '@webapp/components/button';
import InputField from '@webapp/components/form/input';
import ContentWrapper from '@webapp/components/layout/content-wrapper';
import HalfAndHalf from '@webapp/components/layout/half-and-half';
import { EMAIL_REGEX } from '@webapp/configuration/regex';
import { useIsMobile } from '@webapp/hooks/is-mobile';
import { normalizeUserData } from '@webapp/utils/normalize-user-data';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import ContentImage from '@webapp/components/layout/content-image';

interface ForgotPasswordPageProps {
  className?: string;
}

const ForgotPasswordPage: FunctionComponent<ForgotPasswordPageProps> = ({ className }) => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  const colorMode = theme.palette.mode;

  const loading = false;
  const username = 'admin@sinapsis.com';
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState(username || '');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = normalizeUserData(data.get('email'));

    if (!email || !EMAIL_REGEX.test(email)) {
      return;
    }
  };

  const getError = (email: string) => {
    if (!touched.email) {
      return '';
    }
    if (!email) {
      return formatMessage({ id: 'COMMON.REQUIRED' });
    }
    if (!EMAIL_REGEX.test(email)) {
      return formatMessage({ id: 'AUTH.FORGOT_PASSWORD.EMAIL.ERROR' });
    }
    return '';
  };

  const goToLogin = () => navigate('/sign-in');

  return (
    <section id="forgotPassword" className={className || ''} aria-labelledby="forgot-password-title">
      <HalfAndHalf
        mainSection="left"
        leftOverflow
        leftContent={
          <ContentWrapper centeredContent>
            <FormWrapper
              title={formatMessage({ id: 'AUTH.FORGOT_PASSWORD.TITLE' })}
              subtitle={formatMessage({ id: 'AUTH.FORGOT_PASSWORD.SUBTITLE' })}
              sx={{
                maxWidth: {
                  xs: '100%',
                  sm: '80%',
                },
              }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <InputField
                  required
                  fullWidth
                  id="email"
                  label={formatMessage({ id: 'AUTH.FORGOT_PASSWORD.EMAIL.LABEL' })}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  value={email}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  onChange={(ev) => setEmail(ev.target.value)}
                  error={touched.email && !!getError(email)}
                  helperText={getError(email)}
                  aria-invalid={!!getError(email)} // Indicate invalid input
                />
                <Stack
                  direction={{ xs: 'column-reverse', md: 'row' }}
                  spacing={1}
                  justifyContent={{
                    sm: 'center',
                    md: 'flex-end',
                  }}
                  sx={{ mt: { xs: 5, sm: 4 } }}
                >
                  <Button variant="text" onClick={goToLogin} fullWidth={isMobile} aria-label="Back to Login">
                    {formatMessage({ id: 'AUTH.FORGOT_PASSWORD.BUTTON.BACK' })}
                  </Button>
                  <Button
                    loading={loading}
                    disabled={!EMAIL_REGEX.test(email)}
                    type="submit"
                    sx={{ flexShrink: 0 }}
                    fullWidth={isMobile}
                    aria-label="Submit"
                  >
                    {formatMessage({ id: 'AUTH.FORGOT_PASSWORD.BUTTON.LABEL' })}
                  </Button>
                </Stack>
              </Box>
            </FormWrapper>
          </ContentWrapper>
        }
        rightContent={
          <ContentImage
            src={colorMode === 'dark' ? ForgotPasswordImg : ForgotPasswordImgLight}
            alt={`${formatMessage({ id: 'AUTH.FORGOT_PASSWORD.TITLE' })} image`}
            aria-hidden="true"
          />
        }
      />
    </section>
  );
};

export default ForgotPasswordPage;
