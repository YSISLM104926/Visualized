import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    if (isLoggedIn?.status) {
        return children;
    }
    return navigate('/');
}

export default ProtectedRoute