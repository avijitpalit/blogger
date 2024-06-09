import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const WritePost = () => {
  return (
    <>
      <form className='w-50 mx-auto' action="">
        <div className="form-row">
            <label htmlFor="title">Post title</label>
            <input type="text" className="form-control" id='title' name='title' />
        </div>
        <div className="form-row">
            <label htmlFor="thumb">Post thumbnail</label>
            <input type="file" className="form-control" id='thumb' name='thumb' />
        </div>
        <div className="form-row">
            <label htmlFor="thumb">Post thumbnail</label>
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
