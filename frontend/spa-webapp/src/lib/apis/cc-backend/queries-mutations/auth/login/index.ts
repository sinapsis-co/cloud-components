import { useMutation } from '@tanstack/react-query';

import { SignInOutput } from 'aws-amplify/auth';

import { BasicAccountData } from '@webapp/types/auth/basic-account-data';

import { login } from '../../../actions/auth/amplify-actions';

interface UseLoginMutationProps {
  loginData: BasicAccountData;
  handleSuccess?: (data: SignInOutput) => void;
  handleError?: (error: any) => void;
}

export const useLoginMutation = ({ loginData, handleError, handleSuccess }: UseLoginMutationProps) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: () => login(loginData),
    onSuccess: (data) => {
      if (handleSuccess) {
        handleSuccess(data);
      }
    },
    //add backend error format
    onError: (error: any) => {
      if (handleError) {
        handleError(error);
      }
    },
  });
};
