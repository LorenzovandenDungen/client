import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();

        const user = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post('http://localhost:5000/api/admin-login', user);
            console.log(response.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default AdminLogin;
