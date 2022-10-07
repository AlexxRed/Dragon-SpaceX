import { Box, Text, Shadow, Button } from './RegisterPage.styled'
import RegisterFormComponent from '../../components/RegisterForm/RegisterForm.component'
import { useNavigate } from 'react-router-dom';
import { refs } from '../../services/consts/refs';
import { IUser } from '../../services/types/user.types';
import axios from 'axios';
import { signup } from '../../redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { infoStyle } from "../../services/userInformator";
import { Loader } from '../../components/Loader/Loader';
import { useState } from 'react';
infoStyle()

export default function RegisterPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {
        navigate(refs.login, { replace: false });
    };


    const initialData = {
        name: '',
        email: '',
        password: '',
        repeatpassword: ''
    };

    const onSave = async (values: IUser) => {
        setIsLoading(true)
        const data: IUser = 
        {
            name: values.name,
            email: values.email,
            password: values.password
        }
        // console.log(values)
        try {
            const result = await axios.post(signup, data)
            // console.log(result.status)
            if (result.status === 201) {
                setIsLoading(false)
                Notify.info('You have successfully registered! Enter your email and password!');
                navigate(refs.login, { replace: false });
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
                <RegisterFormComponent data={initialData!} onSave={onSave} title="Register" />
                <Text>Already have account?</Text>
                <Button  onClick={handleClick}><Text>Login</Text></Button>
            </Shadow>
        </Box>
    )
    
}