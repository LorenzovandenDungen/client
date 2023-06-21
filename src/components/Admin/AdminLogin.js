import React, { useState } from 'react';
import userService from '../../services/userService';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await userService.login(credentials);
      // handle successful login here...
      console.log(user);
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      <input
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Email"
        required
        style={styles.input}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        required
        style={styles.input}
      />
      {error && <p style={styles.error}>{error}</p>}
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5f5'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4caf50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer'
  },
  error: {
    margin: '10px 0',
    color: 'red'
  }
};

export default AdminLogin;
