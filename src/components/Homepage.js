// components/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpeg'; // importing logo
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {

  const logoStyle = {
    width: '200px',
    height: 'auto'
  };

  return (
    <div className="container mt-5 text-center">
      <img src={logo} alt="Logo" style={logoStyle} className="mb-5" /> {/* using logo */}
      <h1>Welcome to the Security Awareness System</h1>
      <h2>Please log in:</h2>

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Admin</h5>
              <p className="card-text">Manage users, send invites, and create trainings.</p>
              <Link to="/admin/login" className="btn btn-light btn-block">Admin Login</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Employee</h5>
              <p className="card-text">Access your training and check your grades.</p>
              <Link to="/employee/login" className="btn btn-light btn-block">Employee Login</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Company</h5>
              <p className="card-text">Manage grades and adjust configurations.</p>
              <Link to="/company/login" className="btn btn-dark btn-block">Company Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
