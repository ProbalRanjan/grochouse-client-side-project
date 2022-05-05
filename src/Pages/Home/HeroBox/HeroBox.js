import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBox.css';

const HeroBox = () => {
    return (
        <div className='home'>
            <div className="container hero-container">
                <div className='hero-title'>
                    <h1>WELCOME TO <br />
                        <span>GROCHOUSE</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, distinctio! Accusantium, illo dolor voluptates aperiam totam aliquam.</p>
                    <Link to='/login'>
                        <button className='login-btn'>Login</button>
                    </Link>
                </div>
                <img className='hero-image' src="images/hero-image.png" alt="" />
            </div>
        </div>
    );
};

export default HeroBox;