import { FC } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Box, CreateTodo, FormTitle, FormButton } from './LoginForm.styled';
import InputField from '../InputField/InputField.component';
import registerValidation from '../../services/consts/validation/registerValidation';
import { IUser } from '../../services/types/user.types';

interface IProps {
  data: IUser;
  onSave: (item: IUser) => void;
  title: string;
}

const LoginFormComponent: FC<IProps> = ({ data, onSave, title }) => {
    const handleSubmit = (values: IUser, { resetForm }: FormikHelpers<IUser>) => {
        onSave(values);
        resetForm();
    };

    return (
        <Box>
        <FormTitle>{title}</FormTitle>

            <Formik
                initialValues={data}
                onSubmit={handleSubmit}
                validationSchema={registerValidation}>
            <CreateTodo autoComplete="off">
            <InputField name="username" title="Username" type="text" />
            <InputField name="email" title="Email" type="text" />
            <InputField name="password" title="Password" type="password" />
            <InputField name="repeat_password" title="Verify Password" type="password" />
            <FormButton type="submit">Register</FormButton>
            </CreateTodo>
        </Formik>
        </Box>
    );
    };
export default LoginFormComponent;