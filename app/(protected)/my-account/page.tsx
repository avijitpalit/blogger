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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Auth from '@/components/Auth'

const cookies = new Cookies()
const token = cookies.get('auth-token')

axios.defaults.baseURL = process.env.SERVER_URL
axios.defaults.headers.common['Authorization'] = token;

const UpdateForm = () => {
    const cookies = new Cookies()
    const token = cookies.get('auth-token')

    const onSubmit = (e: any) => {
        e.preventDefault()
        // console.log(e.target.fname);
        
        axios.post('/user/update', {
            fname: e.target.fname.value,
            lname: e.target.lname.value
        })
        .then(resp => {
            toast.success('Account updated')
        })
        .catch(error => {
            toast.error('Unexpected error occured')
        })
    }

    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: ''
    })

    useEffect(() => {
        axios.get('user')
        .then(resp => {
            // console.log(resp);
            setUser({
                fname: resp.data.fname,
                lname: resp.data.lname,
                email: resp.data.email
            })
        })
    }, [])

    return (
        <form className='w-50 mx-auto' onSubmit={ onSubmit }>
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
                <button type="submit" className="btn btn-theme">Update Profile</button>
            </div>
        </form>
    )
}

const PasswordChangeForm = () => {
    const initFormData = {
        currentPW: '',
        newPW: '',
        confirmNewPW: ''
    }

    const [formData, setFormData] = useState(initFormData)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData(prevState => ({...prevState, [name]: value}))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        try {
            const oldPw = formData.currentPW
            const newPw = formData.newPW
            // console.log(oldPw);
            if(e.target.newPW.value != e.target.confirmNewPW.value) throw 'New password and confirm new password not matched'
            axios.post('/user/change-pw', { oldPw, newPw })
                .then(res => {
                    // console.log(res)
                    // document.getElementById('password-change-form').reset()
                    setFormData(initFormData)
                    toast.success(res.data.msg)
                })
                .catch(error => {
                    // console.log(error.response.data.msg);
                    toast.error(error.response.data.msg)
                })
        } catch (error: any) {
            console.log(error);
            toast.error(error)
        }
    }

    return (
        <form id='password-change-form' className='w-50 mx-auto mt-5' onSubmit={ onSubmit }>
            <h5 className='mb-4'>Change Password</h5>
            <div className="form-row">
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0 label">Current password</h6>
                    <input type="password" className="form-control" name='currentPW' value={ formData.currentPW } onChange={handleChange} required />
                </div>
            </div>
            <div className="form-row">
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0 label">New password</h6>
                    <input type="password" className="form-control" name='newPW' value={ formData.newPW } onChange={handleChange} required />
                </div>
            </div>
            <div className="form-row">
                <div className="d-flex align-items-center gap-3">
                    <h6 className="mb-0 label">Confirm new password</h6>
                    <input type="password" className="form-control" name='confirmNewPW' value={ formData.confirmNewPW } onChange={handleChange} required />
                </div>
            </div>
            <div className="form-row text-end mt-4">
                <button type="submit" className="btn btn-theme">Change Password</button>
            </div>
        </form>
    )
}

export default function Update() {
    // const [setCookie, removeCookie] = useCookies(['token']);
    const router = useRouter()
    const { authToken, setAuthToken } = useContext(AuthContext)
    /* const [accoutnUpdateStat, setAccountUpdateStat] = useState({
        'text': ''
    }) */
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: ''
    })
    const cookies = new Cookies()

    /* useLayoutEffect(() => {
        const token = cookies.get('token')
        console.log(token);
    }, []) */

    const handleLogout = () => {
        setAuthToken('')
        cookies.remove('auth-token', { path: '/' })
        router.push('/login')
    }

    return (
        <div className="container my-5">
            <UpdateForm />
            <PasswordChangeForm/>
            <div className="w-50 mx-auto mt-5 text-end">
                <div className="d-inline-flex gap-2">
                    <button onClick={ handleLogout } className="btn btn-theme btn-theme-warning"><FontAwesomeIcon icon={faPowerOff}/> Logout</button>
                    <button className="btn btn-theme btn-theme-danger"><FontAwesomeIcon icon={faTrash}/> Delete Account</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}