import { Box, Text, Shadow, Button } from './RegisterPage.styled'
import RegisterFormComponent from '../../components/RegisterForm/RegisterForm.component'
import { useNavigate } from 'react-router-dom';
import { refs } from '../../services/consts/refs';
import { IUser } from '../../services/types/user.types';


export default function RegisterPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(refs.login, { replace: false });
    };


    const data = {
        username: '',
        email: '',
        password: '',
        repeatpassword: ''
    };

    const onSave = (values: IUser): void => {
        console.log(values)
    };
    
    return (
        <Box>
            <Shadow>
                <RegisterFormComponent data={data!} onSave={onSave} title="Register" />
                <Text>Already have account?</Text>
                <Button  onClick={handleClick}><Text>Login</Text></Button>
            </Shadow>
        </Box>
    )
    
}