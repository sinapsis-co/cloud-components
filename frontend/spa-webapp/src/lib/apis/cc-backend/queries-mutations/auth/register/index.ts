import { useMutation } from '@tanstack/react-query';

import { SignUpOutput } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

import SnackbarUtils from '@webapp/components/snackbar';
import { useAuthStore } from '@webapp/store/auth';
import { BasicAccountData } from '@webapp/types/auth/basic-account-data';

import { signup } from '../../../actions/auth/amplify-actions';

interface UseRegisterMutationProps {
  userData: BasicAccountData;
  onSuccess?: (data: SignUpOutput) => void;
  onError?: (error: Error) => void;
}

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['register'],
    mutationFn: (props: UseRegisterMutationProps) => signup(props.userData),
    onError: (error, { onError }) => {
      SnackbarUtils.error('AUTH.SIGN_IN.ERRORS.' + error.message);
      onError?.(error);
    },
    onSuccess: (data: SignUpOutput, { onSuccess }) => {
      onSuccess?.(data);
      navigate('/home');
    },
  });
};
