import React from 'react'
import Link from 'gatsby-link';

import './navbar-styles.scss';

const NavBar = () => (
    <div class="navbar p-2 w-100">
        <div class="row nav-row" style={{top: '20px'}}>
            <div class="col text-left font-size-md" style={{bottom: '20px'}}><Link class='nav-item' to="/about">*</Link></div>
            <div class="col text-right font-size-md" style={{bottom: '50px'}}><Link class='nav-item' to="/contact">~</Link></div>
        </div>
        <div class="row nav-row" style={{bottom: '20px'}}>
            <div class="col text-left font-size-sm"><Link class='nav-item' to="/about">@</Link></div>
            <div class="col text-right font-size-sm"><Link class='nav-item' to="/about">+</Link></div>
        </div>
    </div>
)

export default NavBar;