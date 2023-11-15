import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export function Donate() {
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for your donation of ${amount}!`);
    };

    return (
        <Container>
            <h1>Donate</h1>
            <p>Thank you for considering a donation! Please enter the amount below to proceed.</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicAmount">
                    <Form.Label>Donation Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} min={0} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Donate;