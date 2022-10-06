import { useNavigate } from "react-router-dom";
import { refs } from '../../services/consts/refs';

export default function PublicRoute({ children }: { children: any }) {
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('token');
    
    return isLoggedIn ? navigate(refs.home, { replace: true }): children;

};