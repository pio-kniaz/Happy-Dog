import { SnackBarType } from '@/const/SnackBarType';
import { setSnackBarOptions, defaultOptions } from '../snackBar';

describe('snackBar tests', () => {
  it('Should return error when SnackBarType do not match', () => {
    expect(() => setSnackBarOptions({
      variant: SnackBarType.wrongType,
    })).toThrow('Unexpected SNACKBAR variant provided');
  });

  it('Should return success snackbar with default options', () => {
    expect(setSnackBarOptions({
      variant: SnackBarType.success,
    })).toEqual({ ...defaultOptions, variant: 'success' });
  });

  it('Should return error snackbar with default options', () => {
    expect(setSnackBarOptions({
      variant: SnackBarType.error,
    })).toEqual({ ...defaultOptions, variant: 'error' });
  });
});
