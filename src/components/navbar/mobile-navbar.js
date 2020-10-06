import React, { Component } from 'react'
import Link from 'gatsby-link';
import Resume from '../../files/resume_website.pdf'
import menu from '../../files/menu.svg'
import x_icon from '../../files/x_icon.svg'

import './mobile-navbar-styles.scss';

class MobileNavBar extends Component {

    state = {
        showingMenu: false,
    }

    showHideMenu = () => this.setState({showingMenu: !this.state.showingMenu});

    render() {
        return(
            <div class="mobile-navbar w-100">
                <div class="row mobile-nav-row" style={{top: '20px'}}>
                    <div class="col-auto text-left font-size-md mobile-nav-home" style={{bottom: '20px'}}>
                        <a className={`mobile-nav-home ${this.state.showingMenu ? ' text-white' : ''}`} href="/">*</a>
                    </div>
                    <div class="col-auto text-right font-size-md" style={{bottom: '60px'}}>
                        <img src={menu} width={'40px'} onClick={this.showHideMenu} className={`${this.state.showingMenu ? ' d-none' : ' '}`}></img>
                        <img src={x_icon} 
                            className={`cursor-pointer close-button ${this.state.showingMenu ? ' ' : ' d-none'}`} 
                            width={'40px'}
                            onClick={this.showHideMenu}>
                        </img>
                    </div>
                </div>


                <div className={`mobile-nav-content w-100 h-100 bg-black ${this.state.showingMenu ? ' ' : ' d-none'}`}>
                    <ul class="mobile-navbar-nav list-unstyled ml-5">
                        <li onClick={this.showHideMenu} class="mobile-nav-item">
                            <Link to="/#work" class="mobile-nav-link">Work</Link>
                        </li>
                        <li onClick={this.showHideMenu} class="mobile-nav-item">
                            <Link to="/#contact" class="mobile-nav-link">Contact</Link>
                        </li>
                        <li class="mobile-nav-item">
                            <a href={Resume} target="_blank" class="mobile-nav-link">Resume</a>
                        </li>
                        <li onClick={this.showHideMenu} class="mobile-nav-item">
                            <a href="https://github.com/willashiomos" target="_blank" rel="noopener noreferrer" class="mobile-nav-link">Github</a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default MobileNavBar;