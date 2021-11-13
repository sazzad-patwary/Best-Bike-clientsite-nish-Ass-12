import React from 'react';
import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const PurchaseForm = ({ service }) => {
    const { user } = useAuth();
    // const { _id, name, img, description, price } = service;

    return (
        <div>
            <form >
                <TextField
                    label="Your Name"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    label="Phone Number"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    size="small"
                />
                <TextField
                    label="Email"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    label="address"
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    size="small"
                />


            </form>
            {/* <Link to={`/myorders/${_id}`}><Button type="submit" style={{ backgroundColor: '#5CE7ED' }} sx={{ color: 'white', width: '50%', m: 1 }} >place order</Button></Link> */}

        </div>
    );
};

export default PurchaseForm;