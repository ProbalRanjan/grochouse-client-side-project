import React from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories/useInventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {

    const [inventories] = useInventories();

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