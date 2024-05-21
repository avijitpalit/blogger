'use client'

import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { useCookies, CookiesProvider } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { AuthContext } from '@/contexts'
import axios from 'axios'
import Cookies from 'universal-cookie'

export default function Page() {
    const [setCookie, removeCookie] = useCookies(['token']);
    const router = useRouter()
    const { authEmail, setAuthEmail } = useContext(AuthContext)
    const [accoutnUpdateStat, setAccountUpdateStat] = useState({
        'text': ''
    })
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: ''
    })
    const cookies = new Cookies()

    useLayoutEffect(() => {
        if(!cookies.get('user-email')) return router.push('/login')
    }, [])

    useEffect(() => {
        const email = cookies. get('user-email')
        if(email){
            axios.get(`http://localhost:3002/user/${ email }`).then(res => {
                setUser({
                    fname: res.data.result.fname,
                    lname: res.data.result.lname,
                    email: res.data.result.email
                })
                console.log(res.data.result.fname)
            })
        }
    }, [])

    const handleLogout = () => {
        setAuthEmail('')
        cookies.remove('user-email', { path: '/' })
        router.push('/login')
    }

    const handleAccountUpdate = async (e: any) => {
        e.preventDefault()
        const result = axios.post('http://localhost:3002/user', {fname: e.target.fname, lname: e.target.lname}, )
    }

    if(!authEmail) return <></>

    return (
        <div className="container my-5">
            <form className='w-50 mx-auto' onSubmit={ handleAccountUpdate }>
                <h5 className='mb-4'>Update Profile</h5>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">Firstname</h6>
                        <input type="text" className="form-control" name='fname' defaultValue={ user.fname } />
                    </div>
                </div>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">Lastname</h6>
                        <input type="text" className="form-control" name='lname' defaultValue={ user.lname } />
                    </div>
                </div>
                <div className="form-row">
                    <div className="d-flex align-items-center gap-3">
                        <h6 className="mb-0 label">Email</h6>
                        <input type="text" className="form-control" name='email' defaultValue={ user.email } disabled />
                    </div>
                </div>
                <div className="form-row text-end mt-4 d-flex align-items-center gap-2 justify-content-end">
                    <span className="text-danger">Some error</span>
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