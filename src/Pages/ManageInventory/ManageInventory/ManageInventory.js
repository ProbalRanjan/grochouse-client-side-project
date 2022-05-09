import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories/useInventories';
import './ManageInventory.css';

const ManageInventory = () => {

    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();

    const handleToInventoryId = id => {
        navigate(`/inventory/${id}`);
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://frozen-sands-51999.herokuapp.com/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(() => {
                    // console.log(data)
                    const remaining = inventories.filter(inventory => inventory._id !== id)
                    setInventories(remaining);
                })
        }
    }

    return (
        <div className='container section-container'>
            <h3 style={{ fontSize: "36px" }}>Manage Inventories</h3>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Supplier</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventories.map(inventory =>
                                <tr key={inventory._id} className='table-items' >
                                    <td>
                                        <img src={inventory.img} alt="" />
                                    </td>
                                    <td>{inventory.name}</td>
                                    <td>{inventory.price}</td>
                                    <td>{inventory.quantity}</td>
                                    <td>{inventory.email}</td>
                                    <td>{inventory.supplier}</td>
                                    <td className='table-btn'>
                                        <button onClick={() => handleToInventoryId(inventory._id)} className='update-button me-lg-4'>Update</button>
                                        <button onClick={() => handleDelete(inventory._id)} className='delete-button ms-lg-4'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            </div>
        </div >
    );
};

export default ManageInventory;