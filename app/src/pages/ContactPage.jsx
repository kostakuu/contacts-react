import React from 'react';

import LoggedInLayout from '../layouts/LoggedInLayout';
import ContactDetails from '../components/contacts/ContactDetails';

const ContactPage = () => {
    return (
        <LoggedInLayout>
            <ContactDetails/>
        </LoggedInLayout>
    );
};

export default ContactPage;
