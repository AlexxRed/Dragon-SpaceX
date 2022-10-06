import { Box, Text, Shadow, Button } from './RegisterPage.styled'
import RegisterFormComponent from '../../components/RegisterForm/RegisterForm.component'
import { useNavigate } from 'react-router-dom';
import { refs } from '../../services/consts/refs';
import { IUser } from '../../services/types/user.types';
import axios from 'axios';
import { signup } from '../../redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { infoStyle } from "../../services/userInformator";
infoStyle()

export default function RegisterPage() {
    const navigate = useNavigate();

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
                Notify.info('You have successfully registered! Enter your email and password!');
                navigate(refs.login, { replace: false });
            }
        } catch (error) {
            
        }

        
    };
    
    return (
        <Box>
            <Shadow>
                <RegisterFormComponent data={initialData!} onSave={onSave} title="Register" />
                <Text>Already have account?</Text>
                <Button  onClick={handleClick}><Text>Login</Text></Button>
            </Shadow>
        </Box>
    )
    
}