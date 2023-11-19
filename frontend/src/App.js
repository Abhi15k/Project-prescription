import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPage from './pages/homepage/AdminPage';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import UserPage from './pages/homepage/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/dashbord' element={<PrivateRoute />}>
        <Route path='user' element={<UserPage />} />
      </Route>
      <Route path='/dashbord' element={<AdminRoute />} >
        <Route path='admin' element={<AdminPage />} />
      </Route>
    </Routes>

  );
}

export default App;
