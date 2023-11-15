import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function EditPostForm({ post, updatePost }) {
    const [postTitle, setPostTitle] = useState(post.title);
    const [postContent, setPostContent] = useState(post.content);

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePost(post.id, postTitle, postContent);
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
                Update Post
            </Button>
        </Form>
    );
}

export default EditPostForm;