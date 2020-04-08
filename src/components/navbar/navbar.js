import React from 'react'
import Link from 'gatsby-link';

import './navbar-styles.scss';

const NavBar = () => (
    <div class="navbar">
        <div class="row">
            <div class="col"><Link class='nav-item' to="/about">*</Link></div>
            <div class="col"><Link class='nav-item' to="/contact">~</Link></div>
        </div>
    </div>
)

export default NavBar;