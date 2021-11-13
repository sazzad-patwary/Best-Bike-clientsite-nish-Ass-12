import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink, useHistory } from 'react-router-dom';
import { Alert, CircularProgress, Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
    const { registerUser, isLoading, user, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <div sx={{ ml: 20, p: 5 }}>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            type="name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-email-input"
                            label="Your email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="basic-password-input"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-password-input"
                            label="Retype your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                        />
                        <Button type="submit" style={{ backgroundColor: '#5CE7ED' }} sx={{ color: 'white', width: '50%', m: 1 }} >Submit</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully!</Alert>}
                    {authError && <Alert severity="error">This user already have an account.</Alert>}

                    <p>Registered ? Please <NavLink style={{ textDecoration: 'none', color: '#5CE7ED' }} to="/login"> Login </NavLink></p>

                </div>
            </Container>
            <Footer></Footer>

        </div >
    );
};

export default Register;