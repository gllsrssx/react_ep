import React from 'react';

function BlogPost({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default BlogPost;