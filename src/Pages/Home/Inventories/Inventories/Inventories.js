import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {

    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    })

    return (
        <div className='container section-container'>
            <h3>Inventory inventories</h3>
            <div className="inventories-container">
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}>
                    </Inventory>)
                }
            </div>
            <Link style={{ textDecoration: "none" }} to='/manageinventory'>
                <button className='global-button manage-btn'>Manage Inventory</button>
            </Link>
        </div>
    );
};

export default Inventories;