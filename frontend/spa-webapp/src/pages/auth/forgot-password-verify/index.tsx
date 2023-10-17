import React, { FunctionComponent, useEffect, useState } from 'react';

import { useIntl } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

import NewPasswordImg from '@webapp/assets/images/content/forgot-password.webp';
import FormWrapper from '@webapp/components/auth/form-wrapper';
import PasswordRequirements from '@webapp/components/auth/password-requirements';
import Button from '@webapp/components/button';
import InputField from '@webapp/components/form/input';
import ContentImage from '@webapp/components/layout/content-image';
import ContentWrapper from '@webapp/components/layout/content-wrapper';
import HalfAndHalf from '@webapp/components/layout/half-and-half';

import { useIsMobile } from '@webapp/hooks/is-mobile';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

interface ForgotPasswordVerifyPageProps {
  className?: string;
}

const ForgotPasswordVerifyPage: FunctionComponent<ForgotPasswordVerifyPageProps> = ({ className }) => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);

  const username = 'admin@sinapsis.com';
  const loading = false;

  const [code, setCode] = useState(params.get('verification') || '');
  const [touched, setTouched] = useState<Record<string, boolean>>(code ? { code: true } : {});
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [resentCode, setResentCode] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (!username) {
      navigate('/sign-in');
      return;
    }
  }, [username]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidated()) {
      return;
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const resendCode = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!username) {
      return;
    }

    setResentCode(true);
  };

  const getPasswordError = () => {
    if (!touched.password) {
      return '';
    }
    if (touched.password && !password) {
      return formatMessage({ id: 'COMMON.REQUIRED' });
    }
  };

  const getConfirmPasswordError = () => {
    if (!touched.confirmPassword) {
      return '';
    }
    if (touched.confirmPassword && !confirmPassword) {
      return formatMessage({ id: 'COMMON.REQUIRED' });
    }
    if (password !== confirmPassword) {
      return formatMessage({ id: 'COMMON.PASSWORD.NOT_MATCH' });
    }
  };

  const renderResendLink = () => {
    if (resentCode && loading) {
      return (
        <Button variant="text" disabled fullWidth={isMobile} aria-label="Resend Verification Code">
          {formatMessage({ id: 'AUTH.FORGOT_PASSWORD_VERIFY.RESEND_CODE.LINK.SENDING.LABEL' })}
        </Button>
      );
    }

    return (
      <Button variant="text" onClick={resendCode} fullWidth={isMobile} aria-label="Resend Verification Code">
        {formatMessage({ id: 'AUTH.FORGOT_PASSWORD_VERIFY.RESEND_CODE.LABEL' })}
      </Button>
    );
  };

  const isValidated = () => {
    return password && /^(?=.*?[A-Z])(?=.*?[0-9])[\S]{8,}$/.test(password) && code;
  };

  return (
    <section id="forgotPasswordVerify" className={className || ''} aria-labelledby="forgot-password-verify-title">
      <HalfAndHalf
        mainSection="left"
        leftOverflow
        leftContent={
          <ContentWrapper centeredContent>
            <FormWrapper
              title={formatMessage({ id: 'AUTH.FORGOT_PASSWORD_VERIFY.TITLE' })}
              customSubtitle={
                <Stack gap={0.5} direction={{ xs: 'column', sm: 'row' }} alignItems="baseline">
                  <Typography component="h6" variant="h5">
                    {formatMessage({ id: 'AUTH.FORGOT_PASSWORD_VERIFY.SUBTITLE' })}
                  </Typography>
                  <Typography component="h6" variant="h5" color={theme.palette.text.secondary}>
                    {username}
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
                <InputField
                  id="code"
                  name="code"
                  label={formatMessage({ id: 'AUTH.FORGOT_PASSWORD_VERIFY.CODE.LABEL' })}
                  fullWidth
                  type="tel"
                  value={code}
                  onChange={(ev) => setCode(ev.target.value)}
                  onBlur={() => setTouched({ ...touched, code: true })}
                  error={touched.code && !code}
                  helperText={touched.code && !code ? formatMessage({ id: 'COMMON.REQUIRED' }) : ''}
                  autoComplete="off"
                  inputProps={{
                    autoComplete: 'off',
                  }}
                />
                <Stack
                  direction={{ sm: 'column', md: 'row' }}
                  spacing={1}
                  rowGap={1}
                  sx={{ mt: 1, position: 'relative' }}
                >
                  <InputField
                    label={formatMessage({ id: 'AUTH.FORGOT_PASSWORD_VERIFY.PASSWORD.LABEL' })}
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    autoComplete="new-password"
                    onChange={(ev) => setPassword(ev.target.value)}
                    onBlur={() => setTouched({ ...touched, password: true })}
                    error={!!getPasswordError()}
                    helperText={getPasswordError()}
                    inputProps={{
                      autoComplete: 'new-password',
                      pattern: '^(?=.*?[A-Z])(?=.*?[0-9])[\\S]{8,}$',
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton onClick={handleClickShowPassword} aria-label="Toggle Password Visibility">
                            {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <InputField
                    required
                    fullWidth
                    name="confirm-password"
                    label={formatMessage({ id: 'AUTH.SIGN_UP.PASSWORD.CONFIRM.LABEL' })}
                    value={confirmPassword}
                    type={showPassword ? 'text' : 'password'}
                    id="confirm-password"
                    autoComplete="new-password"
                    onBlur={() => setTouched({ ...touched, confirmPassword: true })}
                    onChange={(ev) => setConfirmPassword(ev.target.value)}
                    error={!!getConfirmPasswordError()}
                    helperText={getConfirmPasswordError()}
                    inputProps={{
                      pattern: '^(?=.*?[A-Z])(?=.*?[0-9])[\\S]{8,}$',
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton onClick={handleClickShowPassword} aria-label="Toggle Password Visibility">
                            {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {/* TODO: This item should hide/show whenever the user is typing the password, if all requirements are full filed it should be hidden */}
                  {password && (
                    <PasswordRequirements
                      hasAutoHide
                      password={password}
                      sx={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        left: 0,
                        transform: { xs: `translateY(calc(100% + ${theme.spacing(1)}))`, md: 'translateY(100%)' },
                        zIndex: 10,
                      }}
                      aria-hidden={!getPasswordError()} // Hide when there is no password error
                    />
                  )}
                </Stack>
                <Stack
                  direction={{ xs: 'column-reverse', md: 'row' }}
                  spacing={1}
                  justifyContent={{
                    sm: 'center',
                    md: 'flex-end',
                  }}
                  sx={{ mt: { xs: 5, sm: 4 } }}
                >
                  {renderResendLink()}
                  <Button
                    type="submit"
                    disabled={!isValidated()}
                    loading={loading}
                    sx={{ flexShrink: 0 }}
                    fullWidth={isMobile}
                    aria-label="Submit"
                  >
                    {formatMessage({ id: 'AUTH.FORGOT_PASSWORD_VERIFY.BUTTON.LABEL' })}
                  </Button>
                </Stack>
              </Box>
            </FormWrapper>
          </ContentWrapper>
        }
        rightContent={
          <ContentImage
            src={NewPasswordImg}
            alt={`${formatMessage({ id: 'AUTH.FORGOT_PASSWORD_VERIFY.TITLE' })} image`}
            aria-hidden="true"
          />
        }
      />
    </section>
  );
};

export default ForgotPasswordVerifyPage;
