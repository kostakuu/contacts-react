import React from 'react';

import MainLayout from '../layouts/MainLayout';

const LoginPage = () => {
    return (
        <MainLayout>
            <section className="container details">
                <label>
                    Username:
                    <input type="text" placeholder="Username"/>
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="Password"/>
                </label>
                <button className="primary">Login</button>
            </section>
        </MainLayout>
    );
}

export default LoginPage;
