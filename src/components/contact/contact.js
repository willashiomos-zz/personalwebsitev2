import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './contact-styles.scss'

const ContactText = () => (
    <div class='contact row'>
        <div class="col-5 contact-title text-pink">Let's Chat</div>
        <div class='col-4 mx-2 info'>
            <a class="info-item" href="mailto:willashiomos@gmail.com">Email</a>
            <span class="mx-5">/</span>
            <a class="info-item" href="https://www.linkedin.com/in/willa-shiomos-a83319157/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span class="mx-5">/</span>
            <a class="info-item" href="https://github.com/willashiomos" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    </div>
)

export default ContactText;