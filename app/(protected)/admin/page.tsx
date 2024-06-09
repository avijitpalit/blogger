import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const posts = [
    { title: 'Blog post 1', excerpt: 'blog 1 excerpt', thumb: '/temp.webp', id: 1 },
    { title: 'Blog post 2', excerpt: 'blog 2 excerpt', thumb: '/temp.webp', id: 2 },
    { title: 'Blog post 3', excerpt: 'blog 3 excerpt', thumb: '/temp.webp', id: 3 },
    { title: 'Blog post 3', excerpt: 'blog 3 excerpt', thumb: '/temp.webp', id: 3 },
]

const Admin = () => {
  return (
    <div className='d-flex flex-column gap-3'>
        <div>
            <Link href="/write-post" className="btn btn-lg btn-theme">Write Post <FontAwesomeIcon className='ms-2' icon={faUpRightFromSquare}/></Link>
        </div>
        { posts.map(post => (
            <div className="d-flex gap-3 p-4 border rounded align-items-center">
                <div>
                    <Image width={0} height={150} sizes='100vw' className='w-100 rounded' src={ post.thumb } alt='' />
                </div>
                <h3>{ post.title }</h3>
                <div className="d-flex gap-2 align-items-center ms-auto">
                    <a href="#" className="btn btn-theme">Edit</a>
                    <a href="#" className="btn btn-theme">Delete</a>
                </div>
            </div>
        )) }
    </div>
  )
}

export default Admin
