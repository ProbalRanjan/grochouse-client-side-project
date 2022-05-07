import React from 'react';
import { Form } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='container my-5 grid-container'>
            <div className='contact-img'>
                <img src="images/login-contact/contact-us.png" alt="" />
            </div>
            <div className='contact-form'>
                <h3>Get in touch</h3>
                <Form>
                    <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control className='input-field' type="email" placeholder="You Name" required />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className='input-field' type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Write here..." required />
                    </Form.Group>

                    <button className='submit-button'>Send</button>
                </Form>
            </div>
        </div>
    );
};

export default ContactUs;