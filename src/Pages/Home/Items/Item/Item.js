import React from 'react';
import './Item.css';

const Item = ({ item }) => {

    const { name, img, description, price, quantity, supplier } = item;

    return (
        <div className='item'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>{description.slice(0, 50)}...</p>
                <p>Price: ${price}</p>
                <p>Stock: {quantity}</p>
                <p>Supplier: {supplier}</p>
                <button>Update</button>
            </div>

        </div>
    );
};

export default Item;