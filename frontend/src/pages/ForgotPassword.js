import React, { useState } from 'react'
import { Grid, Container, Box, TextField, Button } from '@mui/material';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const [emailError, setEmailError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") {
            setEmailError(true);
        } else if (!/^\S+@\S+\.\S+/.test(email)) {
            setEmailError(true);
        } else {
            alert("Password Reset successfully")
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h2>Forgot Password</h2>
                <Box component="form" sx={{ mt: 3 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField name='email' id='email' value={email} error={emailError} helperText={emailError ? 'field is required' : ''} onChange={(e) => { setEmail(e.target.value); setEmailError(false); }} type="email" label="Email" autoFocus fullWidth required />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" fullWidth variant="contained" onClick={handleSubmit} >RESET</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </Container>
    )
}

export default ForgotPassword