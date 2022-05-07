import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {

    const [inventory, setInventory] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id])

    return (
        <div className='container my-5 grid-container'>
            <h1>hello{inventory.name}</h1>
        </div>
    );
};

export default InventoryDetails;