import React, { FunctionComponent, useState } from 'react';

import { useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';

import verificationCodeImg from '@webapp/assets/images/content/verification-code.webp';
import FormWrapper from '@webapp/components/auth/form-wrapper';
import VerificationCodeCtrl from '@webapp/components/auth/verification-code';
import Button from '@webapp/components/button';
import ContentWrapper from '@webapp/components/layout/content-wrapper';
import HalfAndHalf from '@webapp/components/layout/half-and-half';
import { useIsMobile } from '@webapp/hooks/is-mobile';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ContentImage from '@webapp/components/layout/content-image';

interface VerificationCodePageProps {
  className?: string;
}

const VerificationCodePage: FunctionComponent<VerificationCodePageProps> = ({ className }) => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const params = new URLSearchParams(useLocation().search);
  const { formatMessage } = useIntl();

  const username = 'admin@sinapsis.com';

  const loading = false;
  const alreadySent = false;
  const error = false;

  const codeLength = 6;

  const [code, setCode] = useState(params.get('verification') || '');
  const [resentCode, setResentCode] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username || !code) {
      return;
    }
  };

  const resendCode = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!username || !!alreadySent) {
      return;
    }

    setResentCode(true);
  };

  const renderResendLink = () => {
    if (resentCode && loading) {
      return (
        <Typography variant="body2" fontWeight={600}>
          {formatMessage({ id: 'AUTH.VERIFICATION_CODE.RESEND_CODE.LINK.SENDING.LABEL' })}
        </Typography>
      );
    }

    if (alreadySent) {
      return (
        <Typography variant="body2" fontWeight={600}>
          {formatMessage({ id: 'AUTH.VERIFICATION_CODE.RESEND_CODE.LINK.SENT.LABEL' })}
        </Typography>
      );
    }

    return (
      <Button
        variant="text"
        onClick={resendCode}
        fullWidth={isMobile}
        aria-label={formatMessage({ id: 'AUTH.VERIFICATION_CODE.RESEND_CODE.LINK.LABEL' })}
      >
        {formatMessage({ id: 'AUTH.VERIFICATION_CODE.RESEND_CODE.LINK.LABEL' })}
      </Button>
    );
  };

  const handleVerificationOnChange = (data: string) => {
    setCode(data);
  };

  const handleVerificationOnCompleted = (data: string) => {
    if (!username || !data) {
      return;
    }
  };

  return (
    <section id="VerificationCode" className={className || ''} aria-labelledby="verification-code-title">
      <HalfAndHalf
        mainSection="left"
        leftOverflow
        leftContent={
          <ContentWrapper centeredContent>
            <FormWrapper
              title={formatMessage({ id: 'AUTH.VERIFICATION_CODE.TITLE' })}
              customSubtitle={
                <Stack gap={0.5} direction={{ xs: 'column', sm: 'row' }} alignItems="baseline">
                  <Typography component="h6" variant="h5">
                    {formatMessage({ id: 'AUTH.VERIFICATION_CODE.SUBTITLE' })}
                  </Typography>
                  <Typography component="h6" variant="h5" color={theme.palette.text.secondary}>
                    {username || ''}
                  </Typography>
                </Stack>
              }
              sx={{
                maxWidth: {
                  xs: '100%',
                  sm: '80%',
                },
              }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <VerificationCodeCtrl
                  error={error}
                  success={code.length >= codeLength}
                  length={codeLength}
                  onChange={handleVerificationOnChange}
                  onCompleted={handleVerificationOnCompleted}
                />
                <Stack
                  direction={{ xs: 'column-reverse', sm: 'row' }}
                  spacing={2}
                  justifyContent={{
                    xs: 'center',
                    md: 'flex-end',
                  }}
                  alignItems="center"
                  sx={{ mt: { xs: 5, sm: 4 } }}
                  role="group"
                  aria-labelledby="verification-code-button"
                >
                  {renderResendLink()}
                  <Button
                    fullWidth={isMobile}
                    type="submit"
                    disabled={codeLength > code.length}
                    loading={loading}
                    sx={{ flexShrink: 0 }}
                    aria-label={formatMessage({ id: 'AUTH.VERIFICATION_CODE.BUTTON.LABEL' })}
                  >
                    {formatMessage({ id: 'AUTH.VERIFICATION_CODE.BUTTON.LABEL' })}
                  </Button>
                </Stack>
              </Box>
            </FormWrapper>
          </ContentWrapper>
        }
        rightContent={
          <ContentImage
            src={verificationCodeImg}
            alt={`${formatMessage({ id: 'AUTH.VERIFICATION_CODE.TITLE' })} image`}
            aria-hidden="true"
          />
        }
      />
    </section>
  );
};

export default VerificationCodePage;
