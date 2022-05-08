import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import './AddInventory.css';

const AddInventory = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/inventory';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
                reset();
                toast("Thank you for adding inventory")
            })
    };

    return (
        <div className='container section-container added-form my-5'>
            <h2 className='pb-2' style={{ color: '#7FBA00' }}>Add New Inventory</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Inventory Name' type='text' {...register("name", { required: true, maxLength: 30 })} />
                    <input placeholder='Image URL' type='url' {...register("img")} />
                    <textarea placeholder='Description' type='text' {...register("description")} />
                    <input placeholder='Price' type='number' {...register("price")} />
                    <input placeholder='Quantity' type='number' {...register("quantity")} />
                    <input placeholder='Supplier' type='text' {...register("supplier")} />
                    <button type="submit" className='global-button'>Add Inventory</button>
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
};

export default AddInventory;