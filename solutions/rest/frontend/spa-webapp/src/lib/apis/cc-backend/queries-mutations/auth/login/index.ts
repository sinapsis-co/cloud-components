import { useMutation } from '@tanstack/react-query';

import { SignInOutput } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

import SnackbarUtils from '@webapp/components/snackbar';
import { useAuthStore } from '@webapp/store/auth';
import { BasicAccountData } from '@webapp/types/auth/basic-account-data';

import { login } from '../../../actions/auth/amplify-actions';

interface UseLoginMutationProps {
  loginData: BasicAccountData;
  onSuccess?: (data: SignInOutput) => void;
  onError?: (error: Error) => void;
}

export const useLoginMutation = () => {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['login'],
    mutationFn: ({ loginData }: UseLoginMutationProps) => login(loginData),
    onError: (error, { onError }) => {
      setLoggedIn(false);
      SnackbarUtils.error('AUTH.SIGN_IN.ERRORS.' + error.message);

      //? IF NECESSARY, WE CAN USE THIS CALLBACK TO SEND THE ERROR TO THE COMPONENT THAT CALLED THIS HOOK
      onError?.(error);
    },
    onSuccess: (data: SignInOutput, { onSuccess }) => {
      //? STORE DATA IN ZUSTAND
      const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
      setLoggedIn(true);

      //? IF NECESSARY, WE CAN USE THIS CALLBACK TO SEND THE DATA TO THE COMPONENT THAT CALLED THIS HOOK
      onSuccess?.(data);

      //? SIDE EFFECTS
      navigate('/home');
    },
  });
};
