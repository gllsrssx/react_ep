import React, { useState, useEffect, useContext } from 'react';
import BlogPost from '../components/BlogPost';
import AddPostForm from '../components/AddPostForm';
import { UserContext } from '../contexts/UserContext';

function BlogList() {
    const [posts, setPosts] = useState([]);
    const { isLoggedIn } = useContext(UserContext);

    useEffect(() => {
        // Replace this with your actual fetch call
        fetch('https://api.example.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPosts(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            {posts.map(post => <BlogPost key={post.id} post={post} />)}
            {isLoggedIn && <AddPostForm />}
        </div>
    );
}

export default BlogList;