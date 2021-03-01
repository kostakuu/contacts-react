import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';
import ProtectedRoute from './components/shared/ProtectedRoute';

const App = () => <BrowserRouter>
    <Switch>
        <Route path="/login" component={LoginPage} exact/>
        <ProtectedRoute path="/" component={IndexPage} exact/>
        <ProtectedRoute path="/contact" component={ContactPage} exact/>
        <ProtectedRoute path="/contact/:id" component={ContactPage} exact/>
        <ProtectedRoute path="/account" component={AccountPage} exact/>
    </Switch>
</BrowserRouter>;

export default App;
