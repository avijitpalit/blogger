'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { headers } from 'next/headers'

const cookies = new Cookies()
const token = cookies.get('auth-token')

axios.defaults.baseURL = process.env.SERVER_URL
axios.defaults.headers.common['Authorization'] = token;

const WritePost = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const { title, content, thumb } = e.target
    axios.post('/post/create', {
      title: title.value,
      content: content.value,
      thumb: thumb.files[0]
    }, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then(res => {
      console.log(res);
      
    })
    .catch(error => {
      console.log(error);
      
    })
  }

  return (
    <>
      <form className='w-50 mx-auto' encType='multipart/form-data' onSubmit={ handleSubmit }>
        <div className="form-row">
            <label htmlFor="title">Post title</label>
            <input type="text" className="form-control" id='title' name='title' required />
        </div>
        <div className="form-row">
            <label htmlFor="thumb">Post thumbnail</label>
            <input type="file" className="form-control" id='thumb' name='thumb'/>
        </div>
        <div className="form-row">
            <label htmlFor="thumb">Post content</label>
            <textarea name="content" id="content" className="form-control" rows={10}></textarea>
        </div>
        <div className="form-row text-end">
            <button type="submit" className="btn btn-theme btn-lg">Create Post <FontAwesomeIcon className='ms-2' icon={faCirclePlus} /></button>
        </div>
      </form>
    </>
  )
}

export default WritePost
