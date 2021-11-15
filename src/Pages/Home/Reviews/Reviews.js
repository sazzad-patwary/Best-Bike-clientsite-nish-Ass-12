import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://desolate-earth-84933.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1, my: 10 }}>
                <Typography sx={{ pb: 10, textAlign: 'center' }} variant="h3">Customer Review </Typography>
                <Container>

                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            reviews.map(review => <Review
                                key={review.name}
                                review={review}
                            ></Review>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>

    );
};

export default Reviews;