import React, { FunctionComponent, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import SignUpImageLight from '@webapp/assets/images/content/sign-up-light.webp';
import SignUpImage from '@webapp/assets/images/content/sign-up.webp';
import FormWrapper from '@webapp/components/auth/form-wrapper';
import PasswordRequirements from '@webapp/components/auth/password-requirements';
import Button from '@webapp/components/button';
import InputField from '@webapp/components/form/input';
import ContentImage from '@webapp/components/layout/content-image';
import ContentWrapper from '@webapp/components/layout/content-wrapper';
import HalfAndHalf from '@webapp/components/layout/half-and-half';
import { useIsMobile } from '@webapp/hooks/is-mobile';
import { validateEmail } from '@webapp/utils/input-validations';

import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

interface SignUpPageProps {
  className?: string;
}

interface FormErrors {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

const SignUpPage: FunctionComponent<SignUpPageProps> = ({ className }) => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  const colorMode = theme.palette.mode;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isSignUpLoading = false;

  // TODO: This needs to be reviewed and improved to be more generic.
  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: this is only for demo.
    navigate('/step-1');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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

  const goToLogin = () => {
    navigate('/sign-in');
  };

  const handleDisabled =
    !validateEmail(email) ||
    !/^(?=.*?[A-Z])(?=.*?[0-9])[\S]{8,}$/.test(password) ||
    !confirmPassword ||
    password !== confirmPassword ||
    !!getConfirmPasswordError() ||
    !firstName ||
    !lastName;

  return (
    <section id="SignUp" className={className || ''} aria-labelledby="sign-up-title">
      <HalfAndHalf
        mainSection="left"
        leftOverflow
        leftContent={
          <ContentWrapper centeredContent>
            <FormWrapper
              title={formatMessage({ id: 'AUTH.SIGN_UP.TITLE' })}
              subtitle={formatMessage({ id: 'AUTH.SIGN_UP.SUBTITLE' })}
              aria-label={formatMessage({ id: 'AUTH.SIGN_UP.TITLE' })}
              sx={{
                maxWidth: {
                  xs: '100%',
                  sm: '80%',
                },
              }}
            >
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Stack direction="column" spacing={{ xs: 1, md: 0.5 }} sx={{ position: 'relative' }}>
                  <Stack direction="row" spacing={1}>
                    <InputField
                      name="firstName"
                      required
                      fullWidth
                      variant="standard"
                      id="firstName"
                      autoComplete="given-name"
                      label={formatMessage({ id: 'AUTH.SIGN_UP.FIRST_NAME.LABEL' })}
                      value={firstName}
                      onBlur={() => setTouched({ ...touched, firstName: true })}
                      onChange={(ev) => firstName.length < 30 && setFirstName(ev.target.value)}
                      error={touched.firstName && !firstName}
                      helperText={touched.firstName && !firstName ? formatMessage({ id: 'COMMON.REQUIRED' }) : ''}
                      autoFocus
                      aria-label={formatMessage({ id: 'AUTH.SIGN_UP.FIRST_NAME.LABEL' })}
                    />
                    <InputField
                      name="lastName"
                      required
                      fullWidth
                      variant="standard"
                      id="lastName"
                      autoComplete="family-name"
                      label={formatMessage({ id: 'AUTH.SIGN_UP.LAST_NAME.LABEL' })}
                      value={lastName}
                      onBlur={() => setTouched({ ...touched, lastName: true })}
                      onChange={(ev) => lastName.length < 30 && setLastName(ev.target.value)}
                      error={touched.lastName && !lastName}
                      helperText={touched.lastName && !lastName ? formatMessage({ id: 'COMMON.REQUIRED' }) : ''}
                      aria-label={formatMessage({ id: 'AUTH.SIGN_UP.LAST_NAME.LABEL' })}
                    />
                  </Stack>
                  <Stack direction={{ sm: 'column', md: 'row' }} spacing={1} rowGap={1}>
                    <InputField
                      required
                      fullWidth
                      variant="standard"
                      id="email"
                      autoComplete="email"
                      label={formatMessage({ id: 'AUTH.SIGN_UP.EMAIL.LABEL' })}
                      value={email}
                      onBlur={() => setTouched({ ...touched, email: true })}
                      onChange={(ev) => setEmail(ev.target.value)}
                      error={touched.email && !validateEmail(email)}
                      helperText={touched.email && !email ? formatMessage({ id: 'COMMON.REQUIRED' }) : ''}
                      aria-label={formatMessage({ id: 'AUTH.SIGN_UP.EMAIL.LABEL' })}
                    />
                  </Stack>
                  <Stack direction={{ sm: 'column', md: 'row' }} spacing={1} rowGap={1}>
                    <InputField
                      required
                      fullWidth
                      name="password"
                      label={formatMessage({ id: 'AUTH.SIGN_UP.PASSWORD.LABEL' })}
                      value={password}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      autoComplete="new-password"
                      onBlur={() => setTouched({ ...touched, password: true })}
                      onChange={(ev) => setPassword(ev.target.value)}
                      error={!!getPasswordError()}
                      helperText={getPasswordError()}
                      inputProps={{
                        pattern: '^(?=.*?[A-Z])(?=.*?[0-9])[\\S]{8,}$',
                        autoComplete: 'new-password',
                        form: {
                          autoComplete: 'off',
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton onClick={handleClickShowPassword}>
                              {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      aria-label={formatMessage({ id: 'AUTH.SIGN_UP.PASSWORD.LABEL' })}
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
                        autoComplete: 'new-password',
                        form: {
                          autoComplete: 'off',
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton onClick={handleClickShowPassword}>
                              {showPassword ? <VisibilityRoundedIcon /> : <VisibilityOffRoundedIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      aria-label={formatMessage({ id: 'AUTH.SIGN_UP.PASSWORD.CONFIRM.LABEL' })}
                    />
                  </Stack>
                  <AnimatePresence mode="wait">
                    {password && (
                      <PasswordRequirements
                        hasAutoHide
                        password={password}
                        sx={{
                          zIndex: 10,
                        }}
                        aria-label={formatMessage({ id: 'AUTH.SIGN_UP.PASSWORD.LABEL' })}
                      />
                    )}
                  </AnimatePresence>
                </Stack>
                <Stack
                  direction={{ xs: 'column-reverse', md: 'row' }}
                  spacing={1}
                  justifyContent={{
                    sm: 'center',
                    md: 'flex-end',
                  }}
                  sx={{ mt: { xs: 5, sm: 4 } }}
                  role="group"
                  aria-labelledby="sign-up-button"
                >
                  <Button
                    variant="text"
                    onClick={goToLogin}
                    fullWidth={isMobile}
                    aria-label={formatMessage({ id: 'AUTH.SIGN_UP.LINK.LABEL' })}
                  >
                    {formatMessage({ id: 'AUTH.SIGN_UP.LINK.LABEL' })}
                  </Button>
                  <Button
                    type="submit"
                    id="sign-up-button"
                    disabled={handleDisabled}
                    loading={isSignUpLoading}
                    sx={{ flexShrink: 0 }}
                    fullWidth={isMobile}
                    aria-label={formatMessage({ id: 'AUTH.SIGN_UP.BUTTON.LABEL' })}
                  >
                    {formatMessage({ id: 'AUTH.SIGN_UP.BUTTON.LABEL' })}
                  </Button>
                </Stack>
              </Box>
            </FormWrapper>
          </ContentWrapper>
        }
        rightContent={
          <ContentImage
            src={colorMode === 'dark' ? SignUpImage : SignUpImageLight}
            alt={`${formatMessage({ id: 'AUTH.SIGN_UP.TITLE' })} image`}
            aria-hidden="true"
          />
        }
      />
    </section>
  );
};

export default SignUpPage;
