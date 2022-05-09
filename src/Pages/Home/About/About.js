import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className='container section-container'>
            <div className='about-section'>
                <div className='about-info'>
                    <h4>At <span>GrocHouse</span>, we provide a unique solution for warehousing space for business and consumers.</h4>
                    <p>A warehouse is a building for storing goods. Warehouses are used by manufacturers, importers, exporters, wholesalers, transport businesses, customs, etc. They are usually large plain buildings in industrial parks on the outskirts of cities, towns, or villages.
                        <br /> <br />
                        They usually have loading docks to load and unload goods from trucks. Sometimes warehouses are designed for the loading and unloading of goods directly from railways, airports, or seaports. They often have cranes and forklifts for moving goods, which are usually placed on ISO standard pallets and then loaded into pallet racks. Stored goods can include any raw materials, packing materials, spare parts, components, or finished goods associated with agriculture, manufacturing, and production.

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