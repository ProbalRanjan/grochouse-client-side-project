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
                        <p>Land transport is the transport or movement of people, animals or goods from one location to another location on land.</p>
                    </div>
                </div>
                <div className='service-section'>
                    <p className='service-icon'>
                        <FontAwesomeIcon icon={faWarehouse} />
                    </p>
                    <div>
                        <h5>WAREHOUSING</h5>
                        <p>A warehouse is a building for storing goods.</p>
                    </div>
                </div>
                <div className='service-section'>
                    <p className='service-icon'>
                        <FontAwesomeIcon icon={faBox} />
                    </p>
                    <div>
                        <h5>PACKAGING AND STORAGE</h5>
                        <p>Packaging is the science, art and technology of enclosing or protecting products for distribution, storage, sale, and use.</p>
                    </div>
                </div>
                <div className='service-section'>
                    <p className='service-icon'>
                        <FontAwesomeIcon icon={faPlane} />
                    </p>
                    <div>
                        <h5>LOGISTIC SERVICE</h5>
                        <p>Logistics is generally the detailed organization and implementation of a complex operation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;