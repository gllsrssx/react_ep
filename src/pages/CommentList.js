import React, { useState, useEffect, useContext } from 'react';
import Comment from '../components/Comment';
import AddCommentForm from '../components/AddCommentForm';
import { UserContext } from '../contexts/UserContext';

function CommentList() {
    const [comments, setComments] = useState([]);
    const { isLoggedIn } = useContext(UserContext);

    useEffect(() => {
        // Replace this with your actual fetch call
        fetch('https://api.example.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setComments(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            {isLoggedIn && <AddCommentForm />}
        </div>
    );
}

export default CommentList;