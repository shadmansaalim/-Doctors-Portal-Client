import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import login from '../../../images/login.png';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password not matched');
            return;
        }
        registerUser(loginData.name, loginData.email, loginData.password, history);
        e.preventDefault();
        e.target.reset();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 12 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {
                        !isLoading
                            ?
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Name"
                                    name="name"
                                    type="text"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    required
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    required
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    required
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Confirm Password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard"
                                    required
                                />
                                <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Register</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    <Button variant="text">Already Registered? Please Login</Button>
                                </NavLink>
                            </form>
                            :
                            <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Account Registered Successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>

            </Grid>
        </Container>


    );
};

export default Register;