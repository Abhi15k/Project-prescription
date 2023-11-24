import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPage from './pages/homepage/AdminPage';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';
import UserPage from './pages/homepage/UserPage';
import Prescription from './pages/homepage/user/Prescription';
import Account from './pages/homepage/user/Account';
import About from './pages/homepage/user/About';
import AddCompany from './pages/homepage/admin/AddCompany';
import AddPharmacy from './pages/homepage/admin/AddPharmacy';
import ManagePharmacy from './pages/homepage/admin/ManagePharmacy';
import AddState from './pages/homepage/admin/AddState';
import AddDistrict from './pages/homepage/admin/AddDistrict';
import AddCity from './pages/homepage/admin/AddCity';
import ManageUser from './pages/homepage/admin/ManageUser';
import ManageComplaint from './pages/homepage/admin/ManageComplaint';
import AddComplaint from './pages/homepage/user/AddComplaint';
import YourComplaints from './pages/homepage/user/YourComplaints';
import Contact from './pages/homepage/user/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/dashbord' element={<PrivateRoute />}>
        <Route path='user' element={<UserPage />} />
        <Route path='user/prescription' element={<Prescription />} />
        <Route path='user/account' element={<Account />} />
        <Route path='user/about' element={<About />} />
        <Route path='user/contact' element={<Contact />} />
        <Route path='user/addComplaint' element={< AddComplaint />} />
        <Route path='user/yourComplaints' element={< YourComplaints />} />
      </Route>
      <Route path='/dashbord' element={<AdminRoute />} >
        <Route path='admin' element={<AdminPage />} />
        <Route path='admin/addCompany' element={<AddCompany />} />
        <Route path='admin/addPharmacy' element={< AddPharmacy />} />
        <Route path='admin/managePharmacy' element={< ManagePharmacy />} />
        <Route path='admin/manageComplaint' element={< ManageComplaint />} />
        <Route path='admin/manageUser' element={< ManageUser />} />
        <Route path='admin/addState' element={< AddState />} />
        <Route path='admin/addDistrict' element={< AddDistrict />} />
        <Route path='admin/addCity' element={< AddCity />} />
      </Route>
    </Routes>

  );
}

export default App;
