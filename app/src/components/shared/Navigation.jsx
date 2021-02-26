import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    const navigationItems = [
        {
            link: '/',
            name: 'Contacts'
        },
        {
            link: '/account',
            name: 'Account'
        },
        {
            link: '/login',
            name: 'Logout'
        }
    ];

    const mapNavigationItems = ({link, name}) => <button
        key={link}
        className={location.pathname === link ? 'active' : ''}>
        <NavLink to={link}>{name}</NavLink>
    </button>

    const NavigationButtons = () => navigationItems.map(mapNavigationItems);

    return (
        <section className="container navigation">
            <NavigationButtons/>
        </section>
    );
};

export default Navigation;
