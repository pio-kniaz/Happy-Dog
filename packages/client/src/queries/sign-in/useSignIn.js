import { useMutation } from 'react-query';
import { useSnackbar } from 'notistack';

import { api } from '@api';
import AuthService from '@/services/AuthService';

import { setSnackBarOptions } from '@/utils/snackBar';
import { SnackBarType } from '@/const/SnackBarType';

const signInRequest = async (payload) => {
  const { values } = payload;
  const { data } = await api.post('auth/login', values);
  return data;
};

export const useSignIn = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(signInRequest, {
    onSuccess: ({ data }) => {
      enqueueSnackbar('Success', setSnackBarOptions({
        variant: SnackBarType.success,
      }));
      AuthService.signUser(data.accessToken);
      window.location.reload();
    },
    onError: (err) => {
      enqueueSnackbar(err.response.data.message, setSnackBarOptions({
        variant: SnackBarType.error,
      }));
    },
  });
};
