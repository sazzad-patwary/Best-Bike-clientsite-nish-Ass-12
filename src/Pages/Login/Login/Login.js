import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Alert, CircularProgress, Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInUsingGoogle } = useAuth();
    // console.log(user);
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ py: 10 }}>
                <div>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-email-input"
                            label="Your email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            required
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-password-input"
                            label="Your Password"
                            type="password"
                            name="password"
                            required
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <Button type="submit" style={{ backgroundColor: '#5CE7ED' }} sx={{ color: 'white', width: '50%', m: 1 }} >Submit</Button>
                        <p>------------------------------------------or------------------------------------------</p>
                        <Button onClick={handleGoogleSignIn} type="submit" style={{ backgroundColor: '#5CE7ED' }} sx={{ color: 'white', width: '50%', m: 1 }} >Google Sign in</Button>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <p>New user ? Please <NavLink style={{ textDecoration: 'none', color: '#5CE7ED' }} to="/register"> Register </NavLink>at first</p>

                </div>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default Login;