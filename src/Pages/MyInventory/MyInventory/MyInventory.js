import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useInventories from '../../../hooks/useInventories/useInventories';
import './MyInventory.css';

const MyInventory = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {

        const email = user.email;
        const url = `https://frozen-sands-51999.herokuapp.com/myinventory?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))

    }, [user])

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
        <div className='container my-5'>
            {
                user && <>
                    <h2 style={{ textAlign: "center", paddingBottom: "20px" }}><span style={{ color: "#7FBA00", fontWeight: "600" }}>{(user.displayName).split(" ")[0]}</span>'s Inventory</h2>
                </>
            }

            {
                myItems.map(myItem =>
                    <div key={myItem._id} className='my-inventory'>
                        <img src={myItem.img} alt="" />
                        <div>
                            <h4>{myItem.name}</h4>
                            <p>{myItem.description}</p>
                            <p>Price: ${myItem.price}</p>
                            <p>Supplier: {myItem.supplier}</p>
                            <p>Stock: {myItem.quantity}</p>
                            <div className='my-button'>
                                <button onClick={() => handleToInventoryId(myItem._id)} className='update-button me-lg-4'>Update</button>
                                <button onClick={() => handleDelete(myItem._id)} className='delete-button ms-lg-4'>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyInventory;