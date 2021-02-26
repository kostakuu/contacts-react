import React from 'react';

import LoggedInLayout from '../layouts/LoggedInLayout';
import ContactTable from '../components/contacts/ContactTable';

const IndexPage = () => {
    return (
        <LoggedInLayout>
            <section className="container contacts">
                <ContactTable/>
            </section>
        </LoggedInLayout>
    );
};

export default IndexPage;
