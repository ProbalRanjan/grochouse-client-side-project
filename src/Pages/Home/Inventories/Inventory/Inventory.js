import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {

    const { _id, name, img, description, price, quantity, supplier } = inventory;
    const navigate = useNavigate();

    const handleToInventoryId = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='inventory'>
            <img src={img} alt="" />
            <div className='inventories'>
                <h4>{name}</h4>
                <p>{description.slice(0, 50)}...</p>
                <p>Price: ${price}</p>
                <p>Stock: {quantity}</p>
                <p>Supplier: {supplier}</p>
                <button className='global-button' onClick={() => handleToInventoryId(_id)}>Update</button>
            </div>

        </div>
    );
};

export default Inventory;