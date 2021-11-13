import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';

import {

    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../../AdminPanel/MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageProducts from '../../AdminPanel/ManageProducts/ManageProducts';
import ManageOrders from '../../AdminPanel/ManageAllOrders/ManageOrders';
import AddProducts from '../../AdminPanel/AddProducts/AddProducts';


const drawerWidth = 240;


const Dashboard = (props) => {
    const { logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem >
                    <Link style={{ textDecoration: "none" }} to={`${url}`}>
                        My Orders
                    </Link>
                </ListItem>
                <ListItem >
                    <Link style={{ textDecoration: "none" }} to={`${url}/payment`}>
                        Payment
                    </Link>
                </ListItem>
                <ListItem >
                    <Link style={{ textDecoration: "none" }} to={`${url}/addReview`}>
                        Add Review
                    </Link>
                </ListItem>
                {
                    admin && <Box>
                        <ListItem >
                            <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
                                Make Admin
                            </Link>
                        </ListItem>
                        <ListItem >
                            <Link style={{ textDecoration: "none" }} to={`${url}/manageOrders`}>
                                Manage Orders
                            </Link>
                        </ListItem>
                        <ListItem >
                            <Link style={{ textDecoration: "none" }} to={`${url}/manageProducts`}>
                                Manage Products
                            </Link>
                        </ListItem>
                        <ListItem >
                            <Link style={{ textDecoration: "none" }} to={`${url}/addProducts`}>
                                Add Products
                            </Link>
                        </ListItem>

                    </Box>}

                <ListItem >
                    <Button onClick={logOut} color="inherit">Log Out</Button>
                </ListItem>

            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{ textDecoration: "none", paddingLeft: "20px", color: "white" }} to="/home">Home</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>

    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default Dashboard;