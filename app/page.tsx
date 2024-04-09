'use client'

// import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from "./page.module.css";
import { FC, useState, useEffect } from "react";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const Post = (props: any) => {
  return (
    <div className="post p-3 rounded border">
      <h4><a className="text-decoration-none" href="#">{ props.post.title }</a></h4>
      <p>{ props.post.excerpt }</p>
      <div className="mt-3"><a href={ props.post.link } className="btn btn-theme">Read more</a></div>
    </div>
  )
}

export default function Home() {
  const [posts, setPosts] = useState([
    { title: 'Blog post 1', excerpt: 'blog 1 excerpt', link: '#' },
    { title: 'Blog post 2', excerpt: 'blog 2 excerpt', link: '#' },
    { title: 'Blog post 3', excerpt: 'blog 3 excerpt', link: '#' },
  ])

  const [cookies, removeCookie] = useCookies([])

  useEffect(() => {
    const verifyCookie = async () => {
        if(!cookies.token) console.log('navigate to login')
        else console.log('token exists', cookies)
        let user = 'avijitpalit@gmail.com'
        let status = true
        // const { data } = await axios.post('http://localhost:3002', {}, { withCredentials: true })
        // const { status, user } = data
        return status ? toast(`Hello ${ user }`, { position: 'top-right' }) : console.log('remove cookies')
    }
    verifyCookie()
  }, [cookies, removeCookie])

  return (
    <div className="container mt-5">
      {posts.length ? (
        <div className="d-flex flex-column gap-2">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      ) : (
        <h3 className='text-center text-muted'>No posts yet!</h3>
      )}
    </div>
  );
}

