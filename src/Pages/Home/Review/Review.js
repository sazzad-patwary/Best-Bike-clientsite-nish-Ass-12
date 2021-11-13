import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {
    const { name, feedback } = review;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ width: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mt: 2 }} color="text.secondary">
                        {feedback}
                    </Typography>
                </CardContent>
            </Card>

        </Grid>
    );
};

export default Review;