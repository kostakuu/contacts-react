import React from 'react';

const ContactDetails = () => {
    return (
        <section className="container details">
            <img src="/assets/images/logo.png" alt="Contact image"/>
            <label>
                Name:
                <input type="text" placeholder="Name"/>
            </label>
            <label>
                Description:
                <input type="text" placeholder="Description"/>
            </label>
            <label>
                Email:
                <input type="email" placeholder="Email"/>
            </label>
            <label>
                Image:
                <input type="file"/>
            </label>
            <div className="buttons">
                <button className="primary">Save</button>
                <button className="secondary">Delete</button>
            </div>
        </section>
    );
};

export default ContactDetails;
