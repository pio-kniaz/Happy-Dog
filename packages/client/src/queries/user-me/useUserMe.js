import { api } from '@api';
import { useQuery } from 'react-query';

const getUserMe = async () => {
  const { data } = await api.get('/user/me');
  return data;
};

export const useUserMe = (options) => {
  const { isLoading, isSuccess } = useQuery('userMe', getUserMe, { ...options });

  return { isLoading, isSuccess };
};
