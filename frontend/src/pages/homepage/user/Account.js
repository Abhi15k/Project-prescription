import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';
import { useAuth } from '../../../context/Auth';
import axios from 'axios';
import TextField from '@mui/material/TextField'; // Import TextField from Material-UI
import Button from '@mui/material/Button'; // Import Button from Material-UI
import './Account.css'; // Import the CSS file

const Account = () => {

  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    setFormData({
      username: auth.user.name || '',
      email: auth.user.email || '',
      phone: auth.user.phone || '',
    });
  }, [auth.user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/update-profile', {
        name: formData.username,
        email: formData.email,
        contact: formData.phone,
      });

      if (res.data.success) {
        alert(res.data && res.data.message);
        setAuth({
          user: {
            ...auth.user,
            name: formData.username,
            email: formData.email,
            contact: formData.phone,
          },
        });
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error('Update profile error:', error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Update Profile
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Account;
