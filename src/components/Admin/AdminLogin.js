import React, { useState } from 'react';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = e => {
        e.preventDefault();
        // Here you would typically make a request to your backend to log the user in
        // For example, you might use the fetch API to do this
    }
  
    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;
