import './Logo.css';
import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/imgs/logo.png'

const Logo = props => {
    return <aside className="aside logo">
        <Link to="/">
            <img src={logo} alt="logo"></img>
        </Link>
    </aside>
}

export default Logo