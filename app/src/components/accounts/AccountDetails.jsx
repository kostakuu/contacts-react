import React from 'react';

const AccountDetails = () => {
    return (
        <section className="container details">
            <label>
                Username:
                <input type="text" value="kostakuu" disabled/>
            </label>
            <label>
                Email:
                <input type="email" value="kosta@justbeing.dev" disabled/>
            </label>
            <label>
                First name:
                <input type="text" value="Kosta"/>
            </label>
            <label>
                Last name:
                <input type="text" value="Kupresak"/>
            </label>
            <button className="primary">Save</button>
        </section>
    );
};

export default AccountDetails;
