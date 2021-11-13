import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ width: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: "auto", height: "150px", margin: "0 auto" }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mt: 2 }} color="text.secondary">
                        {description.slice(1, 60)}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 2 }} color="text.secondary">
                        Price : $ {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/purchase/${_id}`}><Button size="small">buy now</Button></Link>
                </CardActions>
            </Card>

        </Grid>


    );
};

export default Service;