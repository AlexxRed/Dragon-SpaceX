import { Box, Text, Shadow, Button } from './LoginPage.styled'
import LoginFormComponent from '../../components/LoginForm/LoginForm.component'
import { useNavigate } from 'react-router-dom';
import { refs } from '../../services/consts/refs';
import { IUser } from '../../services/types/user.types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { signin } from '../../redux/auth/authOperations';
import { useState } from 'react';
import { Loader } from '../../components/Loader/Loader';


export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(refs.register, { replace: false });
    };

    const data = {
        email: '',
        password: ''
    };

    const onSave = async (values: IUser): Promise<void> => {
        setIsLoading(true)
        const data: IUser = {
            email: values.email,
            password: values.password
        }  
            try {
            const result = await axios.post(signin, data)
                if (result.status === 200) {
                    setIsLoading(false)
                    localStorage.setItem('token', result.data.token)
                    Notify.info('Welcome');
                    navigate(refs.home, { replace: false });
                }
            } catch (error) {
                setIsLoading(false)
                Notify.info(`Something went wrong please try again ${error}`);
            }
    };
    

    return (
        <Box>
            {isLoading && <Loader/>}
            <Shadow>
                <LoginFormComponent data={data} onSave={onSave} title="Login" />
                <Text>Don`t have an account?</Text>
                <Button onClick={handleClick}><Text>Registration</Text></Button>
            </Shadow>
        </Box>
    )
};