import { Box, Button, Container, Grid, Link, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');
    const navigate = useNavigate();

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === "") {
            setNameError(true);
        } else if (email === "") {
            setEmailError(true);
        } else if (!/^\S+@\S+\.\S+/.test(email)) {
            setEmailError(true);
        }
        else if (phone === "") {
            setPhoneError(true);
        } else if (!/^\d{10}$/.test(phone)) {
            setPhoneError(true);
        }
        else if (password === "") {
            setPasswordError(true);
        }
        else if (confirmPassword === "") {
            setConfirmError(true);
        }
        else if (password !== confirmPassword) {
            alert("Password Dont match");
        }

        try {
            const res = await axios.post("/api/v1/auth/register", { name, email, password, phone })
            if (res.data.success) {
                alert(res.data && res.data.message);
                navigate("/");
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong")
        }
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <h2>Sign Up</h2>
                    <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField name='name' id='name' value={name} error={nameError} helperText={nameError ? 'field is required' : ''} onChange={(e) => { setName(e.target.value); setNameError(false) }} label="Name" autoFocus fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='email' id='email' value={email} error={emailError} helperText={emailError ? 'Enter valid Email' : ''} onChange={(e) => { setEmail(e.target.value); setEmailError(false); }} type="email" label="Email" autoFocus fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='phone' id='phone' value={phone} error={phoneError} helperText={phoneError ? 'Enter valid Phone Number' : ''} onChange={(e) => { setPhone(e.target.value); setPhoneError(false); }} label="Phone Number" autoFocus fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='password' id='password' value={password} error={passwordError} helperText={passwordError ? 'field is required' : ''} onChange={(e) => { setPassword(e.target.value); setPasswordError(false); }} type="password" label="Password" autoFocus fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='confirmPassword' id='confirmPassword' value={confirmPassword} error={confirmPasswordError} helperText={confirmPasswordError ? 'field is required' : ''} onChange={(e) => { setConfirm(e.target.value); setConfirmError(false); }} type="password" label="Confirm Password" autoFocus fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit" fullWidth variant="contained">SIGN UP</Button>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="Login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
            </Container>
        </>
    )
}

export default Register