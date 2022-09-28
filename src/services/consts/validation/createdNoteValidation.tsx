import * as yup from 'yup';

const createdNoteValidation = yup.object({
  name: yup
    .string()
    .min(3, 'Min value 1.')
    .max(30, 'Max value 100.')
    .required('Title is required'),
  content: yup
    .string()
    .min(5, 'Min value 5.')
    .max(30, 'Max value 1000.')
    .required('Title is required')
    .required('Description name is required'),
  category: yup
    .string()
    .required('Category created is required'),
  dates: yup
    .string()
});

export default createdNoteValidation;
