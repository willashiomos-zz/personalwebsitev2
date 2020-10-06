import React, { Component } from 'react'
import Link from 'gatsby-link';
import Resume from '../../files/resume_website.pdf'

import './navbar-styles.scss';



class NavBar extends Component {

    state = {
        showWorkLink: false,
        showContactLink: false,
        showResumeLink: false,
        showGithubLink: false
    };


    handleWorkLinkHover = () => this.setState({showWorkLink: !this.state.showWorkLink});
    handleContactLinkHover = () => this.setState({showContactLink: !this.state.showContactLink});
    handleResumeLinkHover = () => this.setState({showResumeLink: !this.state.showResumeLink});
    handleGithubLinkHover = () => this.setState({showGithubLink: !this.state.showGithubLink});


    render() {
        return(
            <div class="navbar p-2 w-100">
                <div class="row nav-row" style={{top: '20px'}}>
                    <div class="col-auto text-left font-size-md" style={{bottom: '20px'}}>
                        <Link class='nav-item' to="/#work" onMouseOver={this.handleWorkLinkHover} onMouseOut={this.handleWorkLinkHover}>*</Link>
                    </div>
                    <div 
                        className={`nav-link-name col font-size-xs font-weight-bold text-pink ${this.state.showWorkLink ? ' visible' : ' invisible'}`}
                    >
                        Work
                    </div>

                    <div 
                        className={`nav-link-name col text-right font-size-xs font-weight-bold text-pink ${this.state.showContactLink ? ' visible' : ' invisible'}`}
                    >
                        Contact
                    </div>
                    <div class="col-auto text-right font-size-md" style={{bottom: '50px'}}>
                        <Link class='nav-item' to="/#contact" onMouseOver={this.handleContactLinkHover} onMouseOut={this.handleContactLinkHover}>~</Link>
                    </div>
                </div>
                <div class="row nav-row" style={{bottom: '20px'}}>
                    <div class="col-auto text-left font-size-sm">
                        <a class='nav-item' href={Resume} target="_blank" onMouseOver={this.handleResumeLinkHover} onMouseOut={this.handleResumeLinkHover}>@</a>
                    </div>
                    <div 
                        className={`nav-link-name col font-size-xs font-weight-bold text-pink d-flex align-self-center ${this.state.showResumeLink ? ' visible' : ' invisible'}`}
                    >
                        Resume
                    </div>

                    <div 
                        className={`nav-link-name text-right col font-size-xs font-weight-bold text-pink align-self-center ${this.state.showGithubLink ? ' visible' : ' invisible'}`}
                    >
                        Github
                    </div>
                    <div class="col-auto text-right font-size-sm">
                        <a class="nav-item" href="https://github.com/willashiomos" target="_blank" rel="noopener noreferrer" onMouseOver={this.handleGithubLinkHover} onMouseOut={this.handleGithubLinkHover}>+</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;