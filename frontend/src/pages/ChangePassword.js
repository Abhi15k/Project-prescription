import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');

    const [passwordError, setPasswordError] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "") {
            setPasswordError(true);
        } else if (newPassword === "") {
            setNewPasswordError(true);
        }
        else if (confirmPassword === "") {
            setConfirmError(true);
        }
        else if (newPassword !== confirmPassword) {
            alert("Password Dont match");
        }
        else {
            alert("Password changed successfully");
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
                    <h2>Change Password</h2>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField name='currentPassword' id='currentPassword' value={password} error={passwordError} helperText={passwordError ? 'field is required' : ''} onChange={(e) => { setPassword(e.target.value); setPasswordError(false); }} label="Current Password" autoFocus fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='newPassword' id='newPassword' value={newPassword} error={newPasswordError} helperText={newPasswordError ? 'field is required' : ''} onChange={(e) => { setNewPassword(e.target.value); setNewPasswordError(false); }} label="New Password" autoFocus fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name='confirmPassword' id='confirmPassword' value={confirmPassword} error={confirmPasswordError} helperText={confirmPasswordError ? 'field is required' : ''} onChange={(e) => { setConfirm(e.target.value); setConfirmError(false); }} label="Confirm Password" autoFocus fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit" fullWidth variant="contained" onClick={handleSubmit}>UPDATE</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
            </Container>
        </>
    )
}

export default ChangePassword