import React, { FunctionComponent, useState } from 'react';

import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import SignInImgLight from '@webapp/assets/images/content/sign-in-light.webp';
import SignInImg from '@webapp/assets/images/content/sign-in.webp';
import FormWrapper from '@webapp/components/auth/form-wrapper';
import Button from '@webapp/components/button';
import InputField from '@webapp/components/form/input';
import ContentImage from '@webapp/components/layout/content-image';
import ContentWrapper from '@webapp/components/layout/content-wrapper';
import HalfAndHalf from '@webapp/components/layout/half-and-half';
import { useIsMobile } from '@webapp/hooks/is-mobile';

import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

interface SignInPageProps {
  className?: string;
}

const SignInPage: FunctionComponent<SignInPageProps> = ({ className }) => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  const colorMode = theme.palette.mode;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isLoginLoading = false;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: this is only for demo.
    navigate('/step-1');
    return;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginFailed = false;

  const goToRegister = () => {
    navigate('/sign-up');
  };

  const goToForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <section id="SignIn" className={className || ''} aria-labelledby="sign-in-title">
      <HalfAndHalf
        mainSection="left"
        leftOverflow
        leftContent={
          <ContentWrapper centeredContent>
            <FormWrapper
              title={formatMessage({ id: 'AUTH.SIGN_IN.TITLE' })}
              subtitle={formatMessage({ id: 'AUTH.SIGN_IN.SUBTITLE' })}
              sx={{
                maxWidth: {
                  xs: '100%',
                  sm: '80%',
                },
              }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack direction="column" spacing={1}>
                  <InputField
                    required
                    fullWidth
                    id="email"
                    label={formatMessage({ id: 'AUTH.SIGN_IN.EMAIL.LABEL' })}
                    value={email}
                    onBlur={() => setTouched({ ...touched, email: true })}
                    onChange={(ev) => setEmail(ev.target.value)}
                    error={(touched.email && !email) || !!loginFailed}
                    helperText={touched.email && !email ? formatMessage({ id: 'COMMON.REQUIRED' }) : ''}
                    name="email"
                    autoComplete="email"
                    autoFocus
                    aria-label="Email"
                  />
                  <InputField
                    required
                    fullWidth
                    name="password"
                    label={formatMessage({ id: 'AUTH.SIGN_IN.PASSWORD.LABEL' })}
                    value={password}
                    onBlur={() => setTouched({ ...touched, password: true })}
                    onChange={(ev) => setPassword(ev.target.value)}
                    error={(touched.password && !password) || !!loginFailed}
                    helperText={touched.password && !password ? formatMessage({ id: 'COMMON.REQUIRED' }) : ''}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton onClick={handleClickShowPassword} aria-label="Toggle Password Visibility">
                            {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    aria-label="Password"
                  />
                  <Link
                    underline="hover"
                    onClick={goToForgotPassword}
                    sx={{ display: 'block' }}
                    aria-label="Forgot Password"
                  >
                    {formatMessage({ id: 'AUTH.SIGN_IN.FORGOT_PASSWORD.LINK.LABEL' })}
                  </Link>
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
                  <Button variant="text" onClick={goToRegister} fullWidth={isMobile} aria-label="Register">
                    {formatMessage({ id: 'AUTH.SIGN_IN.LINK.LABEL' })}
                  </Button>
                  <Button
                    type="submit"
                    disabled={!email || !password || password.length < 8}
                    loading={isLoginLoading}
                    sx={{ flexShrink: 0 }}
                    fullWidth={isMobile}
                    aria-label="Sign In"
                  >
                    {formatMessage({ id: 'AUTH.SIGN_IN.BUTTON.LABEL' })}
                  </Button>
                </Stack>
              </Box>
            </FormWrapper>
          </ContentWrapper>
        }
        rightContent={
          <ContentImage
            src={colorMode === 'dark' ? SignInImg : SignInImgLight}
            alt={formatMessage({ id: 'AUTH.SIGN_IN.TITLE' })}
            aria-hidden="true"
          />
        }
      />
    </section>
  );
};

export default SignInPage;
