// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='headerStyle'>
            <img src={logo} alt="" />
            <div className='ancorTag'>
                <a href="/order">Order</a>
                <a href="/order">Order Review</a>
                <a href="/About">Mange Inventory</a>
                <a href="/login">Log In</a>
            </div>
        </nav>
    );
};

export default Header;