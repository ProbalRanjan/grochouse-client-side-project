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
                    <p>The GrocHouse is the most popular inventory website to keep your inventory in trustful warehouse. On GrocHouse, we provide a unique solution for warehousing space for business and consumers.</p>
                    <Link to='/login'>
                        <button className='global-button'>Login</button>
                    </Link>
                </div>
                <img className='hero-image' src="images/hero-image.png" alt="" />
            </div>
        </div>
    );
};

export default HeroBox;