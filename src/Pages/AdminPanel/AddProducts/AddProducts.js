import { Alert, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        console.log(data);

        axios.post('https://desolate-earth-84933.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                setSuccess(true);
            })
    }
    return (
        <div className="add-product">
            <Typography sx={{ py: 5, textAlign: 'center' }} variant="h3">Add a Product</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="Service image" />
                <input {...register("name", { required: true, maxLength: 50 })} placeholder="Service Name" />
                <textarea {...register("description")} placeholder="Service description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input type="submit" />
            </form>
            {success && <Alert severity="success">Add products Successfully!</Alert>}
        </div>
    );
};

export default AddProducts;