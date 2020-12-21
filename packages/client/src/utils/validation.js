export const ValidationMessages = Object.freeze({
  email: 'Niepoprawny email',
  required: 'Pole wymagane',
  pesel: 'Nieprawidłowy numer PESEL',
  phoneNmber: 'Nieprawidłowy format numeru telefonu',
  password: 'Nieprawidłowy format hasła',
  passwordConfirmation: 'Haslo sa rozne',
  passwordFormat: 'Min One uppercase, one number and one special character required',
  dateFormat: 'Wymagany format daty YYYY-MM-DD',
  maxLength: 'Max',
  minLength: 'Min',
});

export const maxLength = (length) => `${ValidationMessages.maxLength} ${length}`;
export const minLength = (length) => `${ValidationMessages.minLength} ${length}`;
