import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './AddInventory.css';

const AddInventory = () => {

    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const url = 'https://frozen-sands-51999.herokuapp.com/inventory';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(() => {
                // console.log('Success:', data);
                reset();
                toast("Thank you for adding inventory")
            })
    };

    return (
        <div className='container section-container added-form my-5'>
            <h2 className='pb-2' style={{ color: '#7FBA00' }}>Add New Inventory</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Inventory Name' type='text' {...register("name", { required: true, maxLength: 40 })} />
                    <input placeholder='Image URL' type='url' {...register("img")} />
                    <textarea placeholder='Description' type='text' {...register("description")} />
                    <input placeholder='Price' type='number' {...register("price", {
                        valueAsNumber: true,
                    })} />
                    <input placeholder='Quantity' type='number' {...register("quantity", {
                        valueAsNumber: true,
                    })} />
                    <input placeholder='Supplier' type='text' {...register("supplier")} />

                    <input
                        placeholder={user.email}
                        value={user.email}
                        id="email"
                        name="email"
                        type="email"
                        {...register("email", { required: true })}
                        autoComplete="off"
                    />

                    <button type="submit" className='global-button'>Add Inventory</button>
                </form>
            </div>
        </div>
    );
};

export default AddInventory;