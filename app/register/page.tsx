'use client'

import Link from 'next/link'
import React from 'react'

export default function Page() {
    const onCreateAccount = (e: any) => {
        e.preventDefault()
        alert('Create account form submitting')
    }

    return (
        <div className="container mt-5">
            <form onSubmit={onCreateAccount} className="w-50 mx-auto border rounded p-5 shadow-sm">
                <h3 className="text-center">Register</h3>
                <div className="form-row mt-5">
                    <input type="email" className="form-control p-3" name='email' placeholder='Your email' required />
                </div>
                <div className="form-row mt-4 d-flex gap-3">
                    <input type="text" className="form-control p-3" name='email' placeholder='Firstname' />
                    <input type="text" className="form-control p-3" name='email' placeholder='Lastname' />
                </div>
                <div className="form-row mt-4">
                    <input type="password" className="form-control p-3" name='password' placeholder='Create password' required />
                </div>
                <div className="form-row mt-4">
                    <input type="password" className="form-control p-3" name='password' placeholder='Confirm password' required />
                </div>

                <div className="form-row mt-4">
                    <button type="submit" className='btn btn-theme p-3 w-100'>Create new account</button>
                </div>
                
                <div className="form-row mt-3 text-center">
                    <span>Already have account? <Link href="/login">Login</Link></span>
                </div>
            </form>
        </div>
    )
}