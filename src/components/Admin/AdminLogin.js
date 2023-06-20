// AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/login', { email, password });
            // Handle response (store user info, redirect, show error, etc.)
        } catch (err) {
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Log In</button>
        </form>
    );
};

export default AdminLogin;
