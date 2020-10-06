import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './contact-styles.scss'

const ContactText = () => (
    <section id="contact">
        <div class='contact row'>
            <div class="col-lg-6 col-md-6 col-sm-12 contact-title text-pink d-flex">Let's Chat</div>
            <div class='col-lg-4 col-md-4 col-sm-12 mx-2 contact-info'>
                <div class='row flex-nowrap contact-row'>
                    <a class="contact-item" href="mailto:willashiomos@gmail.com">Email</a>
                    <span class="mx-5">/</span>
                    <a class="contact-item" href="https://www.linkedin.com/in/willa-shiomos-a83319157/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div class='row contact-row'>
                    <span class="mr-5">/</span>
                    <a class="contact-item" href="https://github.com/willashiomos" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>
        </div>
    </section>
)

export default ContactText;