import { useMutation } from '@tanstack/react-query';

import { logout } from '../../../actions/auth/amplify-actions';

interface UseLogoutMutationProps {
  handleSuccess?: () => void;
  handleError?: () => void;
}

export const useLogoutMutation = ({ handleError, handleSuccess }: UseLogoutMutationProps) => {
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      if (handleSuccess) {
        handleSuccess();
      }
    },
    //add backend error format
    onError: (error: any) => {
      if (handleError) {
        handleError();
      }
    },
  });
};
