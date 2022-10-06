import * as yup from 'yup';

const loginValidation = yup.object({
  email: yup
    .string()
    .min(5)
    .max(100)
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length')
});

export default loginValidation;

