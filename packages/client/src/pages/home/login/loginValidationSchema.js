import * as Yup from 'yup';
import { ValidationMessages } from '@/utils/validation';

export const loginValidationSchema = Yup
  .object()
  .shape({
    password: Yup.string()
      .required(ValidationMessages.required),
    email: Yup.string()
      .email(ValidationMessages.email)
      .required(ValidationMessages.required),
  });
