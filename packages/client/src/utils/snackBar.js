import { SnackBarType } from '@/const/SnackBarType';

export const defaultOptions = {
  autoHideDuration: 3000,
  preventDuplicate: true,
};

export const setSnackBarOptions = (options) => {
  const { variant } = options;

  if (!Object.values(SnackBarType).includes(variant)) {
    throw new TypeError('Unexpected SNACKBAR variant provided');
  }

  return {
    ...defaultOptions,
    ...options,
  };
};
