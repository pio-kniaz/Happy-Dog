import * as Yup from 'yup';
import { ValidationMessages, maxLength, minLength } from '@/utils/validation';
import { passwordFormatRegExp } from '@/const/regExp';

export const registerValidationSchema = Yup.object()
  .shape({
    firstName: Yup.string()
      .trim()
      .max(35, maxLength(35))
      .required(ValidationMessages.required),
    lastName: Yup.string()
      .trim()
      .max(35, maxLength(35))
      .required(ValidationMessages.required),
    email: Yup.string()
      .email(ValidationMessages.email)
      .required(ValidationMessages.required),
    password: Yup.string()
      .min(6, minLength(6))
      .max(35, maxLength(35))
      .matches(passwordFormatRegExp, ValidationMessages.passwordFormat)
      .required(ValidationMessages.required),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password')], ValidationMessages.passwordConfirmation)
      .required(ValidationMessages.required),
    birthday: Yup.date()
      .typeError(ValidationMessages.dateFormat)
      .nullable()
      .required(ValidationMessages.required),
    gender: Yup.string()
      .required(ValidationMessages.required),
  });
