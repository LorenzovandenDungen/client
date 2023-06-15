import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components here
import AdminLogin from './components/Admin/AdminLogin';
import Users from './components/Admin/Users';
import Invites from './components/Admin/Invites';
import Trainings from './components/Admin/Trainings';

import EmployeeLogin from './components/Employee/EmployeeLogin';
import AvailableTrainings from './components/Employee/AvailableTrainings';
import MyGrades from './components/Employee/MyGrades';

import ManagerLogin from './components/Company/ManagerLogin';
import CompanyGrades from './components/Company/MyGrades';
import Config from './components/Company/Config';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/invites" component={Invites} />
        <Route path="/admin/trainings" component={Trainings} />

        <Route path="/employee/login" component={EmployeeLogin} />
        <Route path="/employee/trainings" component={AvailableTrainings} />
        <Route path="/employee/grades" component={MyGrades} />

        <Route path="/company/login" component={ManagerLogin} />
        <Route path="/company/grades" component={CompanyGrades} />
        <Route path="/company/config" component={Config} />

        {/* You can add a default route that redirects users to a desired page */}
        <Route path="*" component={EmployeeLogin} />
      </Switch>
    </Router>
  );
}

export default App;
