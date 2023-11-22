import React from 'react';
import { Box, Button, Container, Grid, TextField } from '@mui/material';
import Layout from '../../../components/Layout/Layout'
import { useAuth } from '../../../context/Auth';

const Account = () => {
    const [auth, setAuth] = useAuth();

    return (
        <Layout>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h2>Profile</h2>
                    <form>
                        <Box component="div" sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="name"
                                        id="name"
                                        type="text"
                                        label="Name"
                                        value={auth?.user.name}
                                        readOnly
                                        autoFocus
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="email"
                                        id="email"
                                        type="email"
                                        label="Email"
                                        value={auth?.user.email}
                                        autoFocus
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="phone"
                                        id="phone"
                                        type="phone"
                                        label="Phone"
                                        value={auth?.user.phone}
                                        autoFocus
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" fullWidth variant="contained">
                                        UPDATE
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Layout>
    )
}

export default Account