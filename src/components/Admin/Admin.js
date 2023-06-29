import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <p>What would you like to do?</p>
      <ul>
        <li>
          <Link to="/admin/users">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/invites">Manage Invites</Link>
        </li>
        <li>
          <Link to="/admin/trainings">Manage Trainings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Admin;
