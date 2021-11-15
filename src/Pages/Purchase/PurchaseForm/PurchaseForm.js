import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PurchaseForm = ({ service }) => {
    const { user } = useAuth();
    const { _id, name, img, description, price } = service;

    const initialInfo = { name: user.displayName, email: user.email, phone: '', address: "" }

    const [orderInfo, setOrderInfo] = useState(initialInfo);
    // const [orderInfo, setOrderInfo] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);

    }

    const handleOrderSubmit = e => {
        alert('Ordered Sucessfully');
        const orders = {
            ...orderInfo,
            serviceId: _id,
            serviceName: name
        }
        console.log(orders);

        axios.post('https://desolate-earth-84933.herokuapp.com/order', orders)
            .then(res => {
                console.log(res);
            })
        //send to the server
        /* fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/josn'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            }) */

        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleOrderSubmit}>
                <TextField
                    label="product Id"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    defaultValue={_id}
                    size="small"
                />
                <TextField
                    label="product name"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    defaultValue={name}
                    size="small"
                />
                <TextField
                    label="Your Name"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    name="name"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    label="Phone Number"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    label="Email"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    label="address"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    name="address"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <Button type="submit" style={{ backgroundColor: '#5CE7ED' }} sx={{ color: 'white', width: '50%', m: 1 }} >Place Order</Button>

            </form>


        </div>
    );
};

export default PurchaseForm;