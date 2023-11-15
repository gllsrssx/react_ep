import React from 'react';
import BlogPost from './BlogPost';

function PostList({ posts }) {
    return (
        <div>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;