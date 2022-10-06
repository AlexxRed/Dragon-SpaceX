import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import  authSelectors  from '../../redux/auth/authSelectors';
import { refs } from '../../services/consts/refs';

export default function PublicRoute({ children }: { children: any }) {
    const navigate = useNavigate();

    const isLogin = useSelector(authSelectors.getIsLoggedIn);

    return !isLogin ? navigate(refs.login, { replace: true }): children;

};