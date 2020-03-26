import React from 'react';
import propTypes from 'prop-types';

import './button-styles.css'

const Button = (props) => (
    <div>
    <div className="dropshadow-rect"/>
    <a className="button-text" href={props.href}>
    {props.children}  
    </a>
    </div>
)

Button.propTypes = {
    // Link that clicking the button leads to
    href: propTypes.string
}

export default Button;