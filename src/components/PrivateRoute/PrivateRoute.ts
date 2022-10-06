import { useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";
import  authSelectors  from '../../redux/auth/authSelectors';
import { refs } from '../../services/consts/refs';

export default function PrivateRoute({ children }: { children: any }) {
    const navigate = useNavigate();

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? children : navigate(refs.login, { replace: true });
};