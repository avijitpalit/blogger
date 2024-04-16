'use client'

import React, { useContext, useEffect, useLayoutEffect } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { useCookies, CookiesProvider } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/contexts'

export default function Page() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const router = useRouter()
    const { authEmail } = useContext(AuthContext)

    useLayoutEffect(() => {
        if(!authEmail) return router.push('/login')
    }, [])

    const handleLogout = () => {
        removeCookie('token')
        router.push('/login')
    }

    if(!authEmail) return <></>

    return (
        <div className="container my-5">
            <form className='w-50 mx-auto'>
                <h5 className='mb-4'>Update Profile</h5>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">Firstname</h6>
                        <input type="text" className="form-control" name='fname' />
                    </div>
                </div>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">Lastname</h6>
                        <input type="text" className="form-control" name='lname' />
                    </div>
                </div>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">Email</h6>
                        <input type="text" className="form-control" name='email' />
                    </div>
                </div>
                <div className="form-row text-end mt-4">
                    <button type="submit" className="btn btn-theme">Update Profile</button>
                </div>
            </form>

            <form className='w-50 mx-auto mt-5'>
                <h5 className='mb-4'>Change Password</h5>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">Current password</h6>
                        <input type="text" className="form-control" name='current-pw' />
                    </div>
                </div>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">New password</h6>
                        <input type="text" className="form-control" name='new-pw' />
                    </div>
                </div>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">Confirm new password</h6>
                        <input type="text" className="form-control" name='confirm-new-pw' />
                    </div>
                </div>
                <div className="form-row text-end mt-4">
                    <button type="submit" className="btn btn-theme">Change Password</button>
                </div>
            </form>

            <div className="w-50 mx-auto mt-5 text-end">
                <div className="d-inline-flex gap-2">
                    <button onClick={ handleLogout } className="btn btn-theme btn-theme-warning"><FontAwesomeIcon icon={faPowerOff}/> Logout</button>
                    <button className="btn btn-theme btn-theme-danger"><FontAwesomeIcon icon={faTrash}/> Delete Account</button>
                </div>
            </div>
        </div>
    )
}