import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function AddPostForm({ addPost }) {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addPost(postTitle, postContent);
        setPostTitle('');
        setPostContent('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title:</Form.Label>
                <Form.Control
                    type="text"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Content:</Form.Label>
                <Form.Control
                    as="textarea"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Post
            </Button>
        </Form>
    );
}

export default AddPostForm;