import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <div className='header-links'>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/Order Summery"> Order Summery</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;