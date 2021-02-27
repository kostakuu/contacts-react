import React, {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import contactService from '../../services/contactService';

const DEFAULT_CONTACT = {
    id: undefined,
    name: '',
    description: '',
    email: '',
    image_url: '/assets/images/logo.png',
    image: null
};

const ContactDetails = () => {
    const history = useHistory();
    const location = useLocation();

    const [contact, setContact] = useState(DEFAULT_CONTACT);

    useEffect(() => {
        setContact(location.state || DEFAULT_CONTACT);
    }, [location.state]);

    const handleChangeFile = event => {
        setContact({
            ...contact,
            image: event.target.files[0]
        });
    };

    const handleChange = (event, prop) => {
        setContact({
            ...contact,
            [prop]: event.target.value
        });
    };

    const handleSave = async () => {
        const method = contact.id ? contactService.update : contactService.add;
        const response = await method(contact);

        if (response.status >= 400) {
            alert('Please fill all data');
        } else {
            history.push('/');
        }
    };

    const handleDelete = async () => {
        await contactService.delete(contact);
        history.push('/');
    };

    return (
        <section className="container details">
            <img src={contact.image_url} alt="Contact"/>
            <label>
                Name:
                <input type="text" placeholder="Name" value={contact.name}
                       onChange={(event) => handleChange(event, 'name')}/>
            </label>
            <label>
                Description:
                <input type="text" placeholder="Description" value={contact.description}
                       onChange={(event) => handleChange(event, 'description')}/>
            </label>
            <label>
                Email:
                <input type="email" placeholder="Email" value={contact.email}
                       onChange={(event) => handleChange(event, 'email')}/>
            </label>
            <label>
                Image:
                <input type="file" onChange={handleChangeFile}/>
            </label>
            <div className="buttons">
                <button onClick={handleSave} className="primary">{contact.id ? 'Save' : 'Add'}</button>
                {contact.id && <button onClick={handleDelete} className="secondary">Delete</button>}
            </div>
        </section>
    );
};

export default ContactDetails;
