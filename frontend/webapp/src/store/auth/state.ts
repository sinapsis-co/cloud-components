import { BasicAccountData } from '../../types/auth/basic-account-data';

export interface AuthState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: any;
  changePasswordSuccess?: boolean;
  resendCodeSuccess?: boolean;
  registrationData?: BasicAccountData;
  loggedIn: boolean;
  newUser: boolean;
}

export default AuthState;
