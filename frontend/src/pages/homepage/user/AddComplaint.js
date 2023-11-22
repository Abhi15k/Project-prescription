import React, { useState } from 'react';
import { Box, Button, Container, Grid, Link, TextField } from '@mui/material';
import Layout from '../../../components/Layout/Layout'

function AddComplaint() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title === '') {
            setTitleError(true);
            return;
        } else {
            setTitleError(false);
        }

        if (description === '') {
            setDescriptionError(true);
            return;
        } else {
            setDescriptionError(false);
        }
    };

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
                    <h2>Add Complaint</h2>
                    <form onSubmit={handleSubmit}>
                        <Box component="div" sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="title"
                                        id="title"
                                        value={title}
                                        error={titleError}
                                        helperText={titleError ? 'Field is required' : ''}
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                            setTitleError(false);
                                        }}
                                        type="text"
                                        label="Title"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="description"
                                        id="description"
                                        value={description}
                                        error={descriptionError}
                                        helperText={descriptionError ? 'Field is required' : ''}
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                            setDescriptionError(false);
                                        }}
                                        type="text"
                                        label="Description"
                                        autoFocus
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" fullWidth variant="contained">
                                        SUBMIT
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

export default AddComplaint
