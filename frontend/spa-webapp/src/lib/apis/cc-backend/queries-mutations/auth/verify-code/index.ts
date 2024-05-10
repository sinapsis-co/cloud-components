import { useMutation } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';

import SnackbarUtils from '@webapp/components/snackbar';

import { finishForgotPassword } from '../../../actions/auth/amplify-actions';

interface UseVerifyCodeMutationProps {
  user: string;
  code: string;
  newPassword: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useVerifyCodeMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['verify-code'],
    mutationFn: ({ user, code, newPassword }: UseVerifyCodeMutationProps) =>
      finishForgotPassword(user, code, newPassword),
    onError: (error, { onError }) => {
      SnackbarUtils.error('AUTH.SIGN_IN.ERRORS.' + error.message);
      onError?.(error);
    },
    onSuccess: (_, { onSuccess }) => {
      onSuccess?.();
      navigate('/home');
    },
  });
};
