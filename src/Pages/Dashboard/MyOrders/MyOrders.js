import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Container } from '@mui/material';
import { useParams } from 'react-router';

const MyOrders = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    // console.log(serviceId);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data))
    }, [])
    return (
        <div>
            <Container sx={{ mt: 5 }}>
                <Paper sx={{ p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1 }}>
                    <Grid container spacing={6}>
                        <Grid item>
                            <ButtonBase sx={{ width: 300, height: 300 }}>
                                <img alt="complex" src={service.img} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {service.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {service.description}
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        Price : ${service.price}
                                    </Typography>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default MyOrders;