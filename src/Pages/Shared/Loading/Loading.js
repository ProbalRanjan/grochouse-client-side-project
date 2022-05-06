import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center loading-spinner'>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;