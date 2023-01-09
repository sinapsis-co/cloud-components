import { authInitialState } from './initial-state';
import { AuthActions } from './action-creators';
import AuthState from './state';
import * as actions from './actions';

const authReducer = (state: AuthState = authInitialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case actions.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loggedIn: true,
      };
    }

    case actions.LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        user: undefined,
        loggedIn: false,
        newUser: false,
      };
    }

    case actions.CREATE_ACCOUNT: {
      return {
        ...state,
        registrationData: action.data,
        newUser: true,
      };
    }

    case actions.CREATE_ACCOUNT_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
      };
    }

    case actions.FORGOT_PASSWORD_START: {
      return {
        ...state,
        registrationData: {
          ...(state.registrationData || {}),
          email: action.username,
          password: '',
        },
      };
    }

    case actions.CHANGE_PASSWORD: {
      return {
        ...state,
        changePasswordSuccess: undefined,
      };
    }

    case actions.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        changePasswordSuccess: true,
      };
    }

    case actions.RESEND_CODE: {
      return {
        ...state,
        resendCodeSuccess: undefined,
      };
    }

    case actions.RESEND_CODE_SUCCESS: {
      return {
        ...state,
        resendCodeSuccess: true,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
