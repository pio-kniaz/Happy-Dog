import { useMutation } from 'react-query';
import { useSnackbar } from 'notistack';

import { api } from '@api';
import AuthService from '@/services/AuthService';
import { setSnackBarOptions } from '@/utils/snackBar';
import { SnackBarType } from '@/const/SnackBarType';

const signInRequest = async (payload) => {
  const { values } = payload;
  const { data } = await api.post('http://localhost:8081/api/auth/login', values);
  return data;
};

export const useSignIn = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { mutate: signIn, isSuccess, isLoading } = useMutation(signInRequest, {
    onSuccess: ({ data }) => {
      enqueueSnackbar(`Welcome ${data.firstName}`, setSnackBarOptions({
        variant: SnackBarType.success,
      }));
      AuthService.signUser(data.accessToken);
      setTimeout(() => {
        closeSnackbar();
        window.location.reload();
      }, 2000);
    },
    onError: (err) => {
      enqueueSnackbar(err.response.data.message, setSnackBarOptions({
        variant: SnackBarType.error,
      }));
    },
  });

  return { signIn, isSuccess, isLoading };
};
