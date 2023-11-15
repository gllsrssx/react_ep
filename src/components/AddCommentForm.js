import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function AddCommentForm({ addComment }) {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment(commentText);
        setCommentText('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Comment:</Form.Label>
                <Form.Control
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Comment
            </Button>
        </Form>
    );
}

export default AddCommentForm;