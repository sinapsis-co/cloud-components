import * as actions from './actions';
import { BasicAccountData } from '@webapp/types/auth/basic-account-data';
// import { AccountVerificationData } from '@webapp/types/auth/account-verification-data';
import { ChangePasswordData } from '@webapp/types/auth/change-password-data';
// import { ForgotPasswordData } from '@webapp/types/auth/forgot-password-data';
import { ErrorAction } from '../common/error-action';
import { LoadingAction } from '../common/loading-action';

export class CreateAccount implements LoadingAction {
  readonly type = actions.CREATE_ACCOUNT;
  readonly isLoading = true;

  constructor(public data: BasicAccountData) {}
}

export class CreateAccountSuccess implements LoadingAction {
  readonly type = actions.CREATE_ACCOUNT_SUCCESS;
  readonly isLoading = false;

  constructor(public user: unknown) {}
}

export class CreateAccountError implements ErrorAction {
  readonly type = actions.CREATE_ACCOUNT_ERROR;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

export class ResendCode implements LoadingAction {
  readonly type = actions.RESEND_CODE;
  readonly isLoading = true;

  constructor(public username: string) {}
}

export class ResendCodeSuccess implements LoadingAction {
  readonly type = actions.RESEND_CODE_SUCCESS;
  readonly isLoading = false;
}

export class ResendCodeError implements ErrorAction {
  readonly type = actions.RESEND_CODE_ERROR;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

// export class VerifyAccount implements LoadingAction {
//   readonly type = actions.VERIFY_ACCOUNT;
//   readonly isLoading = true;

//   constructor(public data: AccountVerificationData) {}
// }

export class VerifyAccountSuccess implements LoadingAction {
  readonly type = actions.VERIFY_ACCOUNT_SUCCESS;
  readonly isLoading = false;
}

export class VerifyAccountError implements ErrorAction {
  readonly type = actions.VERIFY_ACCOUNT_ERROR;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

export class VerifyOnNotVerifiedLogin {
  readonly type = actions.VERIFY_ON_NOT_VERIFIED_LOGIN;

  constructor(public username: string) {}
}

// export class LoginUser implements LoadingAction {
//   readonly type = actions.LOGIN_USER;
//   readonly isLoading = true;

//   constructor(public data: BasicAccountData, public afterVerify: boolean = false) {}
// }

export class LoginUserSuccess implements LoadingAction {
  readonly type = actions.LOGIN_USER_SUCCESS;
  readonly isLoading = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  constructor(public user: any) {}
}

export class LoginUserError implements ErrorAction {
  readonly type = actions.LOGIN_USER_ERROR;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

export class GoogleLoginUserError implements ErrorAction {
  readonly type = actions.LOGIN_USER_ERROR_GOOGLE;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

export class LogoutUser implements LoadingAction {
  readonly type = actions.LOGOUT_USER;
  readonly isLoading = true;
}

export class LogoutUserSuccess implements LoadingAction {
  readonly type = actions.LOGOUT_USER_SUCCESS;
  readonly isLoading = false;
}

export class LogoutUserError implements ErrorAction {
  readonly type = actions.LOGOUT_USER_ERROR;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

export class ForgotPasswordStart implements LoadingAction {
  readonly type = actions.FORGOT_PASSWORD_START;
  readonly isLoading = true;

  constructor(public username: string) {}
}

export class ForgotPasswordStartSuccess implements LoadingAction {
  readonly type = actions.FORGOT_PASSWORD_START_SUCCESS;
  readonly isLoading = false;

  constructor(public username: string) {}
}

export class ForgotPasswordStartError implements ErrorAction {
  readonly type = actions.FORGOT_PASSWORD_START_ERROR;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

// export class ForgotPassword implements LoadingAction {
//   readonly type = actions.FORGOT_PASSWORD;
//   readonly isLoading = true;

//   constructor(public data: ForgotPasswordData) {}
// }

export class ForgotPasswordSuccess implements LoadingAction {
  readonly type = actions.FORGOT_PASSWORD_SUCCESS;
  readonly isLoading = false;
}

export class ForgotPasswordError implements ErrorAction {
  readonly type = actions.FORGOT_PASSWORD_ERROR;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

export class ChangePassword implements LoadingAction {
  readonly type = actions.CHANGE_PASSWORD;
  readonly isLoading = true;

  constructor(public data: ChangePasswordData) {}
}

export class ChangePasswordSuccess implements LoadingAction {
  readonly type = actions.CHANGE_PASSWORD_SUCCESS;
  readonly isLoading = false;
}

export class ChangePasswordError implements ErrorAction {
  readonly type = actions.CHANGE_PASSWORD_ERROR;
  readonly isError = true;

  constructor(public code: string, public description: string | string[]) {}
}

export type AuthActions =
  | CreateAccount
  | CreateAccountSuccess
  | CreateAccountError
  // | VerifyAccount
  | VerifyAccountSuccess
  | VerifyAccountError
  | VerifyOnNotVerifiedLogin
  // | LoginUser
  | LoginUserSuccess
  | LoginUserError
  | LogoutUser
  | LogoutUserSuccess
  | LogoutUserError
  | ForgotPasswordStart
  | ForgotPasswordStartSuccess
  | ForgotPasswordStartError
  // | ForgotPassword
  | ForgotPasswordSuccess
  | ForgotPasswordError
  | ChangePassword
  | ChangePasswordSuccess
  | ChangePasswordError
  | ResendCode
  | ResendCodeSuccess
  | ResendCodeError
  | GoogleLoginUserError;
