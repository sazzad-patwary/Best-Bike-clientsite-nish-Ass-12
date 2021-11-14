import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const MyOrder = ({ order }) => {
    const { serviceId, serviceName, name, phone } = order;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ width: 350 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Product ID : {serviceId}
                    </Typography>
                    <Typography sx={{ mt: 2 }} color="text.secondary">
                        Product Name : {serviceName}
                    </Typography>
                </CardContent>
                <Button type="submit" style={{ backgroundColor: '#5CE7ED' }} sx={{ color: 'white', width: '50%', m: 1 }} >Remove Order</Button>
            </Card>


        </Grid>
    );
};

export default MyOrder;