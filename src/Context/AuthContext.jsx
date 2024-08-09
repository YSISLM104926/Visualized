import React, { createContext, useState, useEffect } from 'react';
import { useAuthLoginMutation } from '../redux/api/baseApi';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authLogin, { isLoading }] = useAuthLoginMutation();
    const [isLoggedIn, setIsLoggedIn] = useState({ status: false, userEmail: '' });

    useEffect(() => {
        // Initialize state from localStorage
        const token = localStorage.getItem('accessToken');
        const email = localStorage.getItem('userEmail');
        if (token && email) {
            setIsLoggedIn({ status: true, userEmail: email });
        }
    }, []);

    const Login = async (values) => {
        const res = await authLogin(values);
        console.log(res);
        if (res && res?.data?.success === true) {
            localStorage.setItem('accessToken', res?.data?.token);
            localStorage.setItem('userEmail', res?.data?.email);  // Save email to localStorage
            setIsLoggedIn({ status: true, userEmail: res?.data?.email });
        }
    }

    const Logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userEmail');  // Remove email from localStorage
        setIsLoggedIn({ status: false, userEmail: '' });
    }

    const auth = {
        Login,
        isLoggedIn,
        Logout
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
