import Amplify, { Hub } from 'aws-amplify';

import * as auth from '../../sdk/auth';
import { Action, Dispatch } from 'redux';
import * as actionCreators from './action-creators';

const config = {
  Auth: {
    userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_COGNITO_WEB_CLIENT_ID,
    region: process.env.REACT_APP_COGNITO_REGION,
    mandatorySignIn: true,
    oauth: {
      domain: process.env.REACT_APP_COGNITO_DOMAIN,
      redirectSignIn: `${window.location.protocol}//${window.location.host}/dashboard/`,
      redirectSignOut: `${window.location.protocol}//${window.location.host}/dashboard/`,
      responseType: 'code',
      scope: ['phone', 'email', 'profile', 'openid'],
      options: {
        AdvancedSecurityDataCollectionFlag: false,
      },
    },
  },
};

export const setupAmplifyIntegration = (dispatch: Dispatch<Action>): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listener = (data: any) => {
    switch (data.payload.event) {
      case 'signIn':
        dispatch(new actionCreators.LoginUserSuccess(data.payload.data));
        break;
      case 'signIn_failure':
        if (window.location.pathname.includes('verify-code')) {
          break;
        }
        dispatch(new actionCreators.LoginUserError(data.payload.message, data.payload.data.message));
        break;
      case 'signUp':
        dispatch(new actionCreators.CreateAccountSuccess(data.payload.data.user));
        break;
      case 'signUp_failure':
        dispatch(new actionCreators.CreateAccountError(data.payload.data.code, data.payload.data.message));
        break;
      case 'signOut':
        dispatch(new actionCreators.LogoutUserSuccess());
        break;
      case 'signOut_failure':
        dispatch(new actionCreators.LoginUserError(data.payload.data.code, data.payload.data.message));
        break;
      case 'customState_failure':
        if (window.location.pathname.includes('verify-code')) {
          break;
        }
        // dispatch(new actionCreators.GoogleLoginUserError('AUTH.USER_EXISTS', 'Please login using email/password'));
        break;
      case 'configured':
        auth.getUser().then((user) => {
          if (user) {
            return dispatch(new actionCreators.LoginUserSuccess(user));
          }

          return dispatch(new actionCreators.LogoutUserSuccess());
        });

        break;
    }
  };

  Hub.listen('auth', listener);
  Amplify.configure(config);
};

export default setupAmplifyIntegration;
