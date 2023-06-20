import React, { useState } from "react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you should send request to backend to authenticate admin
    console.log(`Admin is trying to log in with username: ${username} and password: ${password}`);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    margin: 'auto'
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '5px'
  };

  const buttonStyle = {
    padding: '5px'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input style={inputStyle} type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
      <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
      <button style={buttonStyle} type="submit">Login</button>
    </form>
  );
}

export default AdminLogin;
