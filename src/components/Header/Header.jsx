// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='headerStyle'>
            <img src={logo} alt="" />
            <div className='ancorTag'>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Mange Inventory</Link>
                <Link to="/login">Log In</Link>
            </div>
        </nav>
    );
};

export default Header;