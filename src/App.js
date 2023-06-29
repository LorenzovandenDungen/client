import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/Admin/AdminLogin';
import Admin from './components/Admin/Admin'; // <-- Import the Admin component
import Users from './components/Admin/Users';
import Invites from './components/Admin/Invites';
import Trainings from './components/Admin/Trainings';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import AvailableTrainings from './components/Employee/AvailableTrainings';
import MyGrades from './components/Employee/MyGrades';
import ManagerLogin from './components/Company/ManagerLogin';
import CompanyGrades from './components/Company/MyGrades';
import Config from './components/Company/Config';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/invites" element={<Invites />} />
        <Route path="/admin/trainings" element={<Trainings />} />
        <Route path="/admin" element={<Admin />} /> {/* <-- Add this route */}

        {/* Employee Routes */}
        <Route path="/employee/login" element={<EmployeeLogin />} />
        <Route path="/employee/trainings" element={<AvailableTrainings />} />
        <Route path="/employee/grades" element={<MyGrades />} />

        {/* Company Routes */}
        <Route path="/company/login" element={<ManagerLogin />} />
        <Route path="/company/grades" element={<CompanyGrades />} />
        <Route path="/company/config" element={<Config />} />

        {/* Default Route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
