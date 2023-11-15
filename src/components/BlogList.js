import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';

function BlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from Firebase
        // This is a placeholder and needs to be replaced with actual code
        const fetchedPosts = []; // Replace with fetched posts
        setPosts(fetchedPosts);
    }, []);

    return (
        <React.Fragment>
            {posts.map(post => <BlogPost key={post.id} post={post} />)}
        </React.Fragment>
    );
}

export default BlogList;