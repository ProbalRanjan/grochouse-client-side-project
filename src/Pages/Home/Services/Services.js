import { faBox, faCartFlatbed, faPlane, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='container section-container'>
            <h3>Our Services</h3>
            <div className='services-section'>
                <div className='service-section'>
                    <p className='service-icon'>
                        <FontAwesomeIcon icon={faCartFlatbed} />
                    </p>
                    <div>
                        <h5>GROUND TRANSPORT</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, deleniti.</p>
                    </div>
                </div>
                <div className='service-section'>
                    <p className='service-icon'>
                        <FontAwesomeIcon icon={faWarehouse} />
                    </p>
                    <div>
                        <h5>WAREHOUSING</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, deleniti.</p>
                    </div>
                </div>
                <div className='service-section'>
                    <p className='service-icon'>
                        <FontAwesomeIcon icon={faBox} />
                    </p>
                    <div>
                        <h5>PACKAGING AND STORAGE</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, deleniti.</p>
                    </div>
                </div>
                <div className='service-section'>
                    <p className='service-icon'>
                        <FontAwesomeIcon icon={faPlane} />
                    </p>
                    <div>
                        <h5>LOGISTIC SERVICE</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, deleniti.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;