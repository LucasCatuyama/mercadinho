import React from 'react';
import CardLogin from '../components/LoginCard';
import LeafImage from '../images/folha.png';

const Login = () => {

    
    return (
        <div
            className="w-screen h-screen flex justify-center items-center bg-dark-green relative"
            style={{ backgroundImage: `url(${LeafImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            <div className="absolute inset-0 bg-dark-green opacity-50"></div>
            <div className="relative z-10">
                <CardLogin />
            </div>
        </div>
    );
};

export default Login;