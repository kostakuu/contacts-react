import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import tokenService from '../../services/tokenService';

const ProtectedRoute = ({component, path, ...rest}) => tokenService.getTokenFromStorage()
    ? <Route component={component} path={path} {...rest}/>
    : <Redirect to='/login'/>;

export default ProtectedRoute;
