import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const relatedPosts = [
  { title: 'Blog post 5', excerpt: 'blog 1 excerpt', thumb: '/temp.webp', id: 5 },
  { title: 'Blog post 6', excerpt: 'blog 2 excerpt', thumb: '/temp.webp', id: 6 },
  { title: 'Blog post 7', excerpt: 'blog 3 excerpt', thumb: '/temp.webp', id: 7 },
]

const RelatedPost = ({ post }: any) => {
  return (
    <Link href={ `/post/${ post.id }` } className='d-flex gap-3 align-items-center'>
      <div><Image className='rounded' src={ post.thumb } width={100} height={80} alt='Post thumbnail' /></div>
      <div>
        <h5>{ post.title }</h5>
        <p>{ post.excerpt }</p>
      </div>
    </Link>
  )
}

const Comment = () => {
  return(
    <form>
      <h4>Leave a reply</h4>
      <div className="form-row"><input type="text" className="form-control" placeholder="Your name" /></div>
      <div className="form-row"><textarea name="comment" className='form-control' placeholder="Enter comment" rows={5}></textarea></div>
      <div className="form-row text-end"><button type="submit" className='btn btn-theme'>Submit</button></div>
    </form>
  )
}

const Post = () => {
  return (
    <>
      <div className="row gx-5">
        <div className="col-8">
          <h1>Post title here</h1>
          <div className="mt-3">
            <Image width={0} height={0} className='w-100' sizes='100vw' style={{ height: 'auto' }} alt='Post thumbnail' src='/temp.webp' />
          </div>
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi maiores odio molestiae. Reprehenderit et deleniti vitae modi, possimus quam voluptatum est aliquam accusantium, quasi asperiores? Ducimus corporis accusamus dolorem maiores vero. Itaque facilis voluptas recusandae exercitationem velit voluptatibus quia nisi inventore hic, nobis quaerat id illo nostrum dolores quas beatae. Sint quibusdam at repellendus alias, deleniti quam minus veritatis sit corporis, assumenda itaque ipsa. Nemo, vel soluta modi dignissimos eaque adipisci, magni sit hic libero ex odit veritatis, eos repellat fuga cupiditate officia ab autem laboriosam itaque! Nesciunt expedita ipsum rem distinctio omnis ad libero illo reiciendis non, incidunt aut accusantium quo, dicta suscipit, officiis totam unde! Quidem in aspernatur, voluptatem, adipisci vel, quod atque et dolore ipsam deleniti fugiat natus expedita! Fugiat dolor, voluptatem architecto ipsum dolores exercitationem.
            </p>
          </div>
          <div className='w-50 mt-4'>
            <Comment/> 
          </div>
        </div>

        <div className="col-4">
          <h3>Related Posts</h3>
          <div className="d-flex flex-column gap-3 mt-4">{ relatedPosts.map(post => <RelatedPost key={post.id} post={post} /> ) }</div>
        </div>
      </div>
    </>
  )
}

export default Post
