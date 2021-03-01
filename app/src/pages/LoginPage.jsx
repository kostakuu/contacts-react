import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import tokenService from '../services/tokenService';

const DEFAULT_LOGIN = {
    username: '',
    password: ''
};

const LoginPage = () => {
    sessionStorage.clear();

    const history = useHistory();

    const [login, setLogin] = useState(DEFAULT_LOGIN);

    const handleChange = (event, prop) => {
        setLogin({
            ...login,
            [prop]: event.target.value
        });
    };

    const handleLogin = async () => {
        const response = await tokenService.getToken(login);
        if (response.status >= 400) {
            alert('Bad credentials');
        } else {
            const tokenObject = await response.data;
            sessionStorage.setItem('token', tokenObject.access);
            history.push('/');
        }
    };

    return (
        <MainLayout>
            <section className="container details">
                <label>
                    Username:
                    <input type="text" placeholder="Username" value={login.username}
                           onChange={(event) => handleChange(event, 'username')}/>
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="Password" value={login.password}
                           onChange={(event) => handleChange(event, 'password')}/>
                </label>
                <button onClick={handleLogin} className="primary">Login</button>
            </section>
        </MainLayout>
    );
};

export default LoginPage;
