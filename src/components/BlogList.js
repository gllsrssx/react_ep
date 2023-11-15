import React from 'react';
import BlogPost from './BlogPost';

function BlogList({ posts = [] }) {
    return (
        <div>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
}

export default BlogList;