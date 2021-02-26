import React from 'react';

const MainLayout = (props) => <>
    <section className="container header">
        <img src="/assets/images/logo.png" alt="Contact app"/>
        <h1>Contacts</h1>
    </section>
    <section className="container global">
        {props.children}
    </section>
</>;

export default MainLayout;
