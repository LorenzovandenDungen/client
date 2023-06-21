import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Employee"); // Default role is set to "Employee"

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    setUsers(response.data);
  };

  const addUser = async () => {
    await axios.post("http://localhost:5000/api/users", {
      name,
      email,
      role,
    });
    fetchUsers();
    // Reset input fields after adding a user
    setName("");
    setEmail("");
    setRole("Employee");
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  const updateRole = async (id, newRole) => {
    await axios.put(`http://localhost:5000/api/users/${id}`, {
      role: newRole,
    });
    fetchUsers();
  };

  return (
    <div>
      <h2>Users</h2>
      <form onSubmit={addUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
          <option value="Company">Company</option>
        </select>
        <button type="submit">Add User</button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} ({user.email}) - Role: {user.role}
          </p>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
          <select
            value={user.role}
            onChange={(e) => updateRole(user.id, e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
            <option value="Company">Company</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Users;
