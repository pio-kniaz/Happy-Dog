import { useMutation } from 'react-query';
import { useSnackbar } from 'notistack';

import { api } from '@api';
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
    onSuccess: () => {
      enqueueSnackbar('Success', setSnackBarOptions({
        variant: SnackBarType.success,
      }));
    // !TODO: save access token in LocalStorage
    },
    onError: (err) => {
      enqueueSnackbar(err.response.data.message, setSnackBarOptions({
        variant: SnackBarType.error,
      }));
    },
  });
};
