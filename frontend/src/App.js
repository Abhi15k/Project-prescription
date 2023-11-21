import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPage from './pages/homepage/AdminPage';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import UserPage from './pages/homepage/UserPage';
import Complaint from './pages/homepage/user/Complaint';
import Prescription from './pages/homepage/user/Prescription';
import Account from './pages/homepage/user/Account';
import About from './pages/homepage/user/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/dashbord' element={<PrivateRoute />}>
        <Route path='user' element={<UserPage />} />
        <Route path='user/home' element={<UserPage />} />
        <Route path='user/prescription' element={<Prescription />} />
        <Route path='user/account' element={<Account />} />
        <Route path='user/complaint' element={<Complaint />} />
        <Route path='user/about' element={<About />} />
      </Route>
      <Route path='/dashbord' element={<AdminRoute />} >
        <Route path='admin' element={<AdminPage />} />
        <Route path='admin/home' element={<AdminPage />} />
      </Route>
    </Routes>

  );
}

export default App;
