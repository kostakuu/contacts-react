import React from 'react';

import LoggedInLayout from '../layouts/LoggedInLayout';
import AccountDetails from '../components/accounts/AccountDetails';

const AccountPage = () => {
    return (
        <LoggedInLayout>
            <AccountDetails/>
        </LoggedInLayout>
    );
};

export default AccountPage;
