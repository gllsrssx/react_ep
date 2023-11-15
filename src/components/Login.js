import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Login({ loginUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(username, password);
        setUsername('');
        setPassword('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;