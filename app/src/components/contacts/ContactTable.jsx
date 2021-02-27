import React from 'react';
import {useHistory} from 'react-router-dom';

const ContactTable = ({contacts}) => {
    const history = useHistory();

    const handleClick = (contact) => {
        history.push({pathname: `/contact/${contact.id}`, state: contact});
    };

    const handleNewClick = () => {
        history.push({pathname: `/contact`, state: undefined});
    };

    const mapToRows = (contact) => <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>
            <button onClick={() => handleClick(contact)}>Manage</button>
        </td>
    </tr>;

    const ContactRows = () => contacts.map(mapToRows);

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>
                    <button onClick={handleNewClick}>+ Add new</button>
                </th>
            </tr>
            </thead>
            <tbody>
            <ContactRows/>
            </tbody>
        </table>
    );
};

export default ContactTable;
