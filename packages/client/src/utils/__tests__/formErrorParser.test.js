import { formErrorParser } from '../formErrorParser';

const errors = {
  firstName: {
    message: 'Nieprawidlowy format',
  },
  lastName: {
    message: 'Nieprawidlowy format',
  },
  email: {
    message: 'Emial jest juz uzyty',
  },
};

it('Should return correct form error result', () => {
  expect(formErrorParser(errors)).toEqual({
    firstName: 'Nieprawidlowy format',
    lastName: 'Nieprawidlowy format',
    email: 'Emial jest juz uzyty',
  });
});
