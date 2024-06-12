'use client'

import Post from '@/components/Post'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Blogs = () => {
    const [posts, setPosts] = useState([
        { title: 'Blog post 1', excerpt: 'blog 1 excerpt', thumb: '/temp.webp', id: 1 },
        { title: 'Blog post 2', excerpt: 'blog 2 excerpt', thumb: '/temp.webp', id: 2 },
        { title: 'Blog post 3', excerpt: 'blog 3 excerpt', thumb: '/temp.webp', id: 3 },
        { title: 'Blog post 4', excerpt: 'blog 4 excerpt', thumb: '/temp.webp', id: 4 },
    ])

    return (
        <>
            {posts.length ? (
            <div className="row g-4">
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
            ) : (
                <h3 className='text-center text-muted'>No posts yet!</h3>
            )}
        </>
    )
}

export default Blogs
