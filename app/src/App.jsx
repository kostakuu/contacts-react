import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';

const App = () => (
    <>
        <BrowserRouter>
            <Route path="/" component={IndexPage} exact/>
            <Route path="/login" component={LoginPage} exact/>
            <Route path="/contact" component={ContactPage} exact/>
            <Route path="/contact/:id" component={ContactPage} exact/>
            <Route path="/account" component={AccountPage} exact/>
        </BrowserRouter>
    </>
);

export default App;
