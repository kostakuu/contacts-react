import React from 'react';

import MainLayout from './MainLayout';
import Navigation from '../components/shared/Navigation';

const LoggedInLayout = (props) => <MainLayout>
    <Navigation/>
    {props.children}
</MainLayout>;

export default LoggedInLayout;
