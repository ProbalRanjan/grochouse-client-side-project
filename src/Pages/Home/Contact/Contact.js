import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-section'>
            <div className="container reach-out">
                <p>REACH YOUR DESTINATION 100% SAFE and SECURE</p>
                <Link to='/contact'>
                    <button className='global-button2'>Contact Us</button>
                </Link>
            </div>
        </div>
    );
};

export default Contact;