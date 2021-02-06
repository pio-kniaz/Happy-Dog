import {
  useMutation,
} from 'react-query';
import { api } from '@/api';

const signUpRequest = async (payload) => {
  const { values } = payload;
  const { data } = await api.post('/user/register', values);
  return data;
};

export const useSignUp = () => {
  const { mutateAsync: signUpMutation, isSuccess, isLoading } = useMutation(signUpRequest);
  return { signUpMutation, isSuccess, isLoading };
};
