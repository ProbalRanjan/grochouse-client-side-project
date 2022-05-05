import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='container not-found-page'>
            <img src="images/page-not-found.png" alt="" />
            <Link to='/'>
                <button className='d-grid mx-auto return-home-button'>Go to Home Page</button>
            </Link>
        </div>
    );
};

export default PageNotFound;