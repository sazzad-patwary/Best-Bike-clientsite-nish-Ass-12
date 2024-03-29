import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <NavLink to="/home">Home</NavLink>
                        </Typography>
                        <Typography component="div" sx={{ flexGrow: 25 }}>
                            <NavLink to="/allServices">All Services</NavLink>
                        </Typography>
                        {
                            user?.email ?
                                <Box>
                                    <NavLink style={{ textDecoration: "none", color: "white" }} to="/dashboard" >
                                        Dashboard
                                    </NavLink>
                                    <Button onClick={logOut} color="inherit">Log Out</Button>
                                </Box>

                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>

        </div >

    );
};

export default Navigation;