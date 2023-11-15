import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function EditUserForm({ user, updateUser }) {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(user.id, username, email);
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
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update User
            </Button>
        </Form>
    );
}

export default EditUserForm;
