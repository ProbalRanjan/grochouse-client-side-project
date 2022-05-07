import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faFax, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer'>
            <div className="container footer-info">
                <div>
                    <Link className='footer-logo' to='/'>
                        <img src="images/logo/site-logo2.png" alt="" />
                    </Link>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, odio? Repellat rerum aut nulla alias accusantium. </p>
                    <div className='social-media'>
                        <h5>Follow Us:</h5>
                        <button>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faInstagram} />
                        </button>
                    </div>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <div className="quick-links">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                </div>
                <div>
                    <h4>Our Branches</h4>
                    <p>Dhaka</p>
                    <p>Rajshahi</p>
                    <p>Comilla</p>
                    <p>Chattogram</p>
                    <p>Khulna</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <div className='contact-info'>
                        <FontAwesomeIcon className='contact-icon' icon={faPhone} />
                        <p>1800-000-000</p>
                    </div>
                    <div className='contact-info'>
                        <FontAwesomeIcon className='contact-icon' icon={faEnvelopeOpen} />
                        <p>info@grochouse.com</p>
                    </div>
                    <div className='contact-info'>
                        <FontAwesomeIcon className='contact-icon' icon={faFax} />
                        <p>888-473-2963</p>
                    </div>
                    <div className='contact-info'>
                        <FontAwesomeIcon className='contact-icon' icon={faLocationDot} />
                        <p>28/B Grochouse Complex, Dhaka-1300, Bangladesh.</p>
                    </div>
                </div>
            </div>
            <p className='footer-copyright'>© Copyright {year} GROCHOUSE || All Rights Reserved</p>
        </div>
    );
};

export default Footer;