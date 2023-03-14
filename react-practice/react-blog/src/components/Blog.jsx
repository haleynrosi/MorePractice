import React from 'react';

function Blog(){
     const blogPosts = [
        {
            title: 'Blog Post 1',
            content: "First blog post."
        },
        {
            title: 'Blog Post 2',
            content: "Second blog post."
        },
        {
            title: 'Blog Post 3',
            content: "Third blog post."
        },
        {
            title: 'Blog Post 4',
            content: "Fourth blog post."
        },
     ]

    return(
        <div>
            <h1>This is the Blog</h1>
        </div>
    )
}

export default Blog;