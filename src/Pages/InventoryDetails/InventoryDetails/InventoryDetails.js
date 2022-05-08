import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './InventoryDetails.css';

const InventoryDetails = () => {

    const [inventory, setInventory] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id])


    const handleDelivered = () => {
        const newQuantity = (parseInt(inventory.quantity)) - 1;

        const updateInventory = { ...inventory, quantity: newQuantity };
        setInventory(updateInventory);


        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateInventory),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Update:", data)
            })
    }

    return (
        <div className='container my-5 grid-container update-inventory'>
            <div className='inventory-delivered'>
                <div className='inventory-info'>
                    <img src={inventory.img} alt="" />
                    <h4><span>Name:</span> {inventory.name}</h4>
                    <p>{inventory.description}</p>
                    <p><span>Price:</span> ${inventory.price}</p>
                    <p><span>Supplier:</span> {inventory.supplier}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'><span>Stock:</span> {inventory.quantity}</p>
                    <button onClick={() => handleDelivered(id)} className='global-button'>Delivered</button>
                </div>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-4" controlId="formBasicNumber">
                        <Form.Label>Update Your Stock</Form.Label>
                        <Form.Control className='input-field' type="number" placeholder="Put a number" required />
                    </Form.Group>

                    <button className='submit-button'>Update</button>
                </Form>
                <p className='alternative py-4'>OR</p>
                <Link to='/manageinventory'>
                    <button className='submit-button'>Manage Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetails;