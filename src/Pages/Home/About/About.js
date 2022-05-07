import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className='container section-container'>
            <div className='about-section'>
                <div className='about-info'>
                    <h4>At <span>GrocHouse</span>, we provide a unique solution for warehousing space for business and consumers.</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                        <br /> <br />
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                    </p>
                    <Link to='/about'>
                        <button className='global-button'>About Us</button>
                    </Link>
                </div>
                <img src="images/about.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;