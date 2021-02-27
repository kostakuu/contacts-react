import React, {useState, useEffect} from 'react';

import LoggedInLayout from '../layouts/LoggedInLayout';
import ContactTable from '../components/contacts/ContactTable';
import contactService from '../services/contactService';

const IndexPage = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const loadContact = async () => {
            const data = await contactService.getAll();
            setContacts(data);
        };

        loadContact().then(null);
    }, []);

    return (
        <LoggedInLayout>
            <section className="container contacts">
                <ContactTable contacts={contacts}/>
            </section>
        </LoggedInLayout>
    );
};

export default IndexPage;
