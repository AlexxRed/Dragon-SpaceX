import { useNavigate } from "react-router-dom";
import { refs } from '../../services/consts/refs';

export default function PrivateRoute({ children }: { children: any }) {
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('token');

    return isLoggedIn  ? children : navigate(refs.login, { replace: true });
};