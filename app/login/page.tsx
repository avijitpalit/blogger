'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
    const searchParams = useSearchParams()
    const [registered, setRegistered] = useState(false)
    const router = useRouter()
    

    useEffect(() => {
        let registered = searchParams.get('registered') === 'true' ? true : false
        setRegistered(registered)
    }, [])
    
    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:3002/signin', {
                email: 'avijitpalitx@gmail.com',
                password: 'Admin@123'
            }, { withCredentials: true })
            const { done, msg } = data
            if(done){
                toast.success(msg)
                router.push('/')
            } else toast.error(msg)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-5">
            {
                registered ? (
                    <h6 className="text-center text-success mb-4">Account created successfully, now login to access dashboard</h6>
                ) : ('')
            }
            
            <form onSubmit={ handleLogin } action="" className="w-50 mx-auto border rounded p-5 shadow-sm">
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

            <ToastContainer position='bottom-right'/>
        </div>
    )
}