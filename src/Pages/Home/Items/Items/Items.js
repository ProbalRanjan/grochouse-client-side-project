import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const TopItems = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    })

    return (
        <div className='container section-container'>
            <h3>Inventory Items</h3>
            <div className="items-container">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default TopItems;