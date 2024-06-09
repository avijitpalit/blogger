import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post = ({post}: any) => {
    return (
    <div className="col-4">
        <div className="post p-3 rounded border">
        <Image className='rounded w-100' src={post.thumb} width={0} sizes='100vw' height={300} alt='thumbnail' objectFit='contain' />
        <h4 className='mt-3'>{ post.title }</h4>
        <p className='mt-3'>{ post.excerpt }</p>
        <div className="mt-3"><Link href={ `/post/${ post.id }` } className="btn btn-theme">Read more</Link></div>
        </div>
    </div>
    )
}

export default Post
