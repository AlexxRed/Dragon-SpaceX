import { Box, Text, Shadow, Button } from './LoginPage.styled'
import LoginFormComponent from '../../components/LoginForm/LoginForm.component'
import { useNavigate } from 'react-router-dom';
import { refs } from '../../services/consts/refs';
import { IUser } from '../../services/types/user.types';

export default function LoginPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(refs.register, { replace: false });
    };

    const data = {
        login: '',
        password: ''
    };

    const onSave = (values: IUser): void => {
        console.log(values)
    };
    

    return (
        <Box>
            <Shadow>
                <LoginFormComponent data={data} onSave={onSave} title="Login" />
                <Text>Already have account?</Text>
                <Button onClick={handleClick}><Text>Registration</Text></Button>
            </Shadow>
        </Box>
    )
};