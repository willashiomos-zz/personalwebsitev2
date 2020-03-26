import React from 'react'
import Link from 'gatsby-link';

import './navbar-styles.css';

const NavBar = () => (
    <div className="navbar">
        <div><Link className='nav-item' to="/about">about</Link></div>
        <div><Link className='nav-item' to="/contact">contact</Link></div>
    </div>
)

export default NavBar;