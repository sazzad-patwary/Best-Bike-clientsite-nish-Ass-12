import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container, List, ListItemText, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'gray' }}>
            <Container >
                <Box sx={{ width: '100%', pt: 10 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <List>
                                <ListItemText>service</ListItemText>
                                <ListItemText>About</ListItemText>
                                <ListItemText>Contact</ListItemText>
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List>
                                <ListItemText>service</ListItemText>
                                <ListItemText>About</ListItemText>
                                <ListItemText>Contact</ListItemText>
                            </List>
                        </Grid>
                    </Grid>
                    <Typography sx={{ textAlign: 'center', py: 5 }}>Copyright &copy;{new Date().getFullYear()} Best Bike | All rights reserved | Terms of Service | Privacy</Typography>
                </Box>
            </Container>
        </footer >
    );
};

export default Footer;