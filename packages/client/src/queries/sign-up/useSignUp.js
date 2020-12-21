import {
  useMutation,
} from 'react-query';
import { api } from '@/api';

const signUpRequest = async (payload) => {
  const { values } = payload;
  const { data } = await api.post('/user/register', values);
  return data;
};

export const useSignUp = () => useMutation(signUpRequest);
