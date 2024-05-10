import { useMutation } from '@tanstack/react-query';

import { useAuthStore } from '@webapp/store/auth';

import { logout } from '../../../actions/auth/amplify-actions';

interface UseLogoutMutationProps {
  handleSuccess?: () => void;
  handleError?: () => void;
}

export const useLogoutMutation = () => {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);

  return useMutation({
    mutationKey: ['logout'],
    mutationFn: (props: UseLogoutMutationProps) => logout(),
    onSuccess: (data, { handleSuccess }) => {
      setLoggedIn(false);
      handleSuccess?.();
    },
    onError: (error: any, { handleError }) => {
      handleError?.();
    },
  });
};
