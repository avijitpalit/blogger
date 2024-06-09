'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FC, useState, useEffect, useContext } from "react";
import Image from 'next/image';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import Post from '@/components/Post';

export default function Home() {
  const [posts, setPosts] = useState([
    { title: 'Blog post 1', excerpt: 'blog 1 excerpt', thumb: '/temp.webp', id: 1 },
    { title: 'Blog post 2', excerpt: 'blog 2 excerpt', thumb: '/temp.webp', id: 2 },
    { title: 'Blog post 3', excerpt: 'blog 3 excerpt', thumb: '/temp.webp', id: 3 },
  ])

  return (
    <>
      <h2>Recent posts</h2>

      <div className="mt-3">
        {posts.length ? (
            <div className="row">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            </div>
        ) : (
            <h3 className='text-center text-muted'>No posts yet!</h3>
        )}
      </div>
    </>
  );
}

