import { combineEpics } from 'redux-observable';
import { createAccountEpic } from './create-account';
import { verifyAccountEpic } from './verify-account';
import { loginEpic } from './login';
import { logoutEpic } from './logout';
import { changePasswordEpic } from './change-password';
import { forgotPasswordEpic } from './forgot-password';
import { resendCodeEpic } from './resend-code';
import { resetAfterLogoutEpic } from './reset-after-logout';
import { authGuardEpic } from './auth-guard';
import { googleLoginErrorEpic } from './google-login-error';
import { resetGoogleLoginErrorEpic } from './reset-google-login-error';

import { redirectForgotPasswordEpic } from './redirect-forgot-password';
import { redirectRegistrationSuccessEpic } from './redirect-registration-success';
import { redirectUserLoggedOutEpic } from './redirect-user-logged-out';
import { redirectUserLoggedInEpic } from './redirect-user-logged-in';
import { redirectVerificationSuccessEpic } from './redirect-verification-success';
import { Actions } from '../../actions';
import AppState from '../../state';

const authEpic = combineEpics<Actions, Actions, AppState>(
  createAccountEpic,
  verifyAccountEpic,
  loginEpic,
  logoutEpic,
  changePasswordEpic,
  forgotPasswordEpic,
  resendCodeEpic,
  resetAfterLogoutEpic,
  authGuardEpic,
  googleLoginErrorEpic,
  resetGoogleLoginErrorEpic,
  redirectForgotPasswordEpic,
  redirectRegistrationSuccessEpic,
  redirectUserLoggedInEpic,
  redirectUserLoggedOutEpic,
  redirectVerificationSuccessEpic
);

export default authEpic;
