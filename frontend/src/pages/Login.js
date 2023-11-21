import React, { useState } from 'react';
import { Box, Button, Container, Grid, Link, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Auth.js';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '') {
            setEmailError(true);
            return;
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setEmailError(true);
            return;
        } else {
            setEmailError(false);
        }

        if (password === '') {
            setPasswordError(true);
            return;
        } else {
            setPasswordError(false);
        }

        try {
            const res = await axios.post('/api/v1/auth/login', { email, password });
            if (res.data.success) {
                alert(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(`/dashbord/${res.data.user.role === 1 ? 'admin' : 'user'}`);
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <Box component="div" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    id="email"
                                    value={email}
                                    error={emailError}
                                    helperText={emailError ? 'Field is required' : ''}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError(false);
                                    }}
                                    type="email"
                                    label="Email"
                                    autoFocus
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    id="password"
                                    value={password}
                                    error={passwordError}
                                    helperText={passwordError ? 'Field is required' : ''}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError(false);
                                    }}
                                    type="password"
                                    label="Password"
                                    autoFocus
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" fullWidth variant="contained">
                                    LOGIN
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start">
                            <Grid item>
                                <Link href="ForgotPassword" variant="body2">
                                    Forgot Password?
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="Register" variant="body2">
                                    Create new account
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
