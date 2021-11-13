import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import AllService from '../AllService/AllService';
import useServices from '../../../hooks/useServices';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const AllServices = () => {
    const [services] = useServices();
    return (
        <div>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ pl: 65, py: 5 }} variant="h3">Bikes </Typography>
                <Container>

                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <AllService
                                key={service.name}
                                service={service}
                            ></AllService>)
                        }
                    </Grid>
                </Container>
            </Box>
            <Footer></Footer>
        </div >
    );
};

export default AllServices;