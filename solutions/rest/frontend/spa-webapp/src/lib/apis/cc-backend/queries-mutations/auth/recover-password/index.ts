import { useMutation } from '@tanstack/react-query';

import { ResetPasswordOutput } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

import SnackbarUtils from '@webapp/components/snackbar';

import { startForgotPassword } from '../../../actions/auth/amplify-actions';

interface UseRecoverPasswordMutationProps {
  user: string;
  onSuccess?: (data: ResetPasswordOutput) => void;
  onError?: (error: Error) => void;
}

export const useRecoverPasswordMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['recover-password'],
    mutationFn: ({ user }: UseRecoverPasswordMutationProps) => startForgotPassword(user),
    onError: (error, { onError }) => {
      SnackbarUtils.error('AUTH.SIGN_IN.ERRORS.' + error.message);
      onError?.(error);
    },
    onSuccess: (data: ResetPasswordOutput, { onSuccess }) => {
      onSuccess?.(data);
      navigate('/home');
    },
  });
};
