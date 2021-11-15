import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    // console.log(serviceId);

    useEffect(() => {
        fetch('https://desolate-earth-84933.herokuapp.com/order')
            .then((res) => res.json())
            .then((data) => setOrders(data))
    }, [])
    return (
        <div sx={{ my: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ py: 5, textAlign: 'center' }} variant="h3">Manage All Orders</Typography>
                <Container>

                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
                        {
                            orders.map(order => <ManageAllOrder
                                key={order.serviceName}
                                order={order}
                            ></ManageAllOrder>)

                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default ManageOrders;