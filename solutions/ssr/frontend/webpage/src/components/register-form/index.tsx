// import AppState from '@frontend/store/state';
import LoadingButton from '@mui/lab/LoadingButton';
import { Autocomplete, Box, Grid, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FormattedMessage } from 'react-intl';
// import { useDispatch, useSelector } from 'react-redux';
// import { CreateSubscription, FormCleared } from '../../store/prelaunch/action-creators';
// import { AllowedLanguages, translationsContext } from '../../translations';
import { validateEmail, validateName, validateUniversityName } from '../../utils/input-validations';
import { RegisterFormContainer } from './styled';
import { universities } from './universities';

interface FormInputs {
  name: string;
  email: string;
  university: string;
}
interface FormErrors {
  name: boolean;
  email: boolean;
  university: boolean;
}

interface RegisterFormProps {
  isSubscriptionLoading?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ isSubscriptionLoading }) => {
  const theme = useTheme();

  // const { executeRecaptcha } = useGoogleReCaptcha();
  // const translations = useContext(translationsContext);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // const clearForm = useSelector((state: AppState) => state.waitList.clearForm);

  const [universityField, setUniversityField] = React.useState<string>('');
  const [formInputs, setFormInputs] = useState<FormInputs>({
    name: '',
    email: '',
    university: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: false,
    email: false,
    university: false,
  });

  const validateInputs =
    validateEmail(formInputs?.email?.toLowerCase().trim() || '') &&
    validateName(formInputs.name.trim() || '') &&
    validateUniversityName(formInputs.university);

  const handleSubmit = async () => {
    // if (!executeRecaptcha) {
    //   return;
    // }

    // const reCaptchaToken = await executeRecaptcha('register');
    // const areValidInputs = validateInputs;
    // if (!areValidInputs || !reCaptchaToken) {
    //   return;
    // }

    // dispatch(
    //   new CreateSubscription({
    //     email: formInputs.email?.toLowerCase(),
    //     university: formInputs.university,
    //     givenName: formInputs.name,
    //     googleReCaptcha: reCaptchaToken,
    //     language: (translations?.currentLanguage as AllowedLanguages) || 'it',
    //   })
    // );
    return;
  };

  const handleUniversity = (newValue: string) => {
    setFormInputs({
      ...formInputs,
      university: newValue || '',
    });
    if (validateUniversityName(newValue || '')) {
      setFormErrors({ ...formErrors, university: false });
    } else {
      setFormErrors({ ...formErrors, university: true });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const { value, name } = event.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  // React.useEffect(() => {
  //   if (clearForm) {
  //     setFormErrors({
  //       name: false,
  //       email: false,
  //       university: false,
  //     });
  //     setFormInputs({
  //       name: '',
  //       email: '',
  //       university: '',
  //     });
  //     setUniversityField('');
  //     dispatch(new FormCleared());
  //   }
  // }, [clearForm]);

  return (
    <RegisterFormContainer>
      <Typography
        variant="h3"
        component="h3"
        color="#16181D"
        fontWeight={600}
        fontSize={'22px'}
        marginBottom={theme.spacing(2)}
      >
        <FormattedMessage id="HERO_BANNER.FORM_TITLE" />
      </Typography>
      <Box component="form" noValidate sx={{ display: 'grid' }}>
        <Grid container spacing={theme.spacing(2)}>
          <Grid item xs={12} md={12}>
            <TextField
              autoComplete="off"
              inputProps={{
                autoComplete: 'off',
              }}
              error={formErrors.name}
              fullWidth
              label={<FormattedMessage id="HERO_BANNER.FORM_NAME_FIELD" />}
              name="name"
              id="name"
              onChange={(e) => {
                handleInputChange(e);
                validateName(e.target.value?.trim() || '')
                  ? setFormErrors({ ...formErrors, name: false })
                  : setFormErrors({ ...formErrors, name: true });
              }}
              required
              type="text"
              spellCheck={false}
              value={formInputs.name}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              autoComplete="off"
              inputProps={{
                autoComplete: 'off',
              }}
              error={formErrors.email}
              fullWidth
              label={<FormattedMessage id="HERO_BANNER.FORM_EMAIL_FIELD" />}
              name="email"
              onChange={(e) => {
                handleInputChange(e);
                validateEmail(e.target.value?.toLowerCase().trim() || '')
                  ? setFormErrors({ ...formErrors, email: false })
                  : setFormErrors({ ...formErrors, email: true });
              }}
              required
              type="email"
              value={formInputs.email}
              spellCheck={false}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              '& .MuiAutocomplete-popper': {
                width: '90% !important',
                minWidth: '320px !important',
                [theme.breakpoints.up(600)]: {
                  width: '450px !important',
                },
              },
            }}
          >
            <Autocomplete
              options={universities.filter((el) =>
                (el || '').toLowerCase().includes((universityField || '').toLowerCase())
              )}
              sx={{ zIndex: '500' }}
              fullWidth={true}
              id="university"
              value={universityField}
              noOptionsText={<FormattedMessage id="FORM.NO.OPTION" />}
              onInputChange={(_, value) => setUniversityField(value)}
              onChange={(_, university) => {
                handleUniversity(university || '');
              }}
              renderOption={(props, option, state) => {
                return (
                  <li {...props} key={`listItem-${option}-${state.index}`}>
                    {option}
                  </li>
                );
              }}
              filterOptions={(options, state) =>
                options.filter((opt) => (opt || '').toLowerCase().includes((state.inputValue || '').toLowerCase()))
              }
              componentsProps={{
                paper: {
                  sx: {
                    width: isMobile ? '100%' : '150%',
                  },
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  key={params.id}
                  label={<FormattedMessage id="HERO_BANNER.FORM_UNIVERSITY_FIELD" />}
                  name="university"
                  error={formErrors.university}
                  variant="outlined"
                  spellCheck={false}
                  required
                  fullWidth={true}
                />
              )}
            />
          </Grid>
        </Grid>
        <Stack direction={'column'} alignItems={'center'} gap={theme.spacing(2)} marginTop={theme.spacing(2)}>
          <LoadingButton
            variant="contained"
            fullWidth
            onClick={() => handleSubmit()}
            disabled={!validateInputs}
            loading={isSubscriptionLoading}
          >
            <FormattedMessage id="HERO_BANNER.FORM_SUBMIT_BUTTON_LABEL" />
          </LoadingButton>
          <span>
            <FormattedMessage id="HERO_BANNER.FORM_COUNTRY_ALERT" />
          </span>
        </Stack>
      </Box>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
