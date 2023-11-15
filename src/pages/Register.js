// Register.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(UserContext);

    const handleSubmit = event => {
        event.preventDefault();
        register(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;