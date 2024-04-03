import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className="container mt-5">
        <form action="" className="w-50 mx-auto border rounded p-5 shadow-sm">
            <h3 className="text-center">Login</h3>
            <div className="form-row mt-5">
                <input type="text" className="form-control p-3" name='email' placeholder='Your email' />
            </div>
            <div className="form-row mt-4">
                <input type="password" className="form-control p-3" name='password' placeholder='Your secret' />
            </div>

            <div className="form-row mt-4">
                <button type="submit" className='btn btn-theme p-3 w-100'>Login</button>
            </div>
            <div className="form-row mt-3 text-center">
                <Link href="/register">Create new account</Link>
            </div>
        </form>
    </div>
  )
}