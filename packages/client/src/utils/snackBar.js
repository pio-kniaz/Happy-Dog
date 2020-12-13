import { SnackBarType } from '@/const/SnackBarType';

export const setSnackBarOptions = (options) => {
  const { variant } = options;

  if (!Object.values(SnackBarType).includes(variant)) {
    throw new TypeError('Unexpected SNACKBAR variant provided');
  }

  return {
    autoHideDuration: 3000,
    preventDuplicate: true,
    ...options,
  };
};
