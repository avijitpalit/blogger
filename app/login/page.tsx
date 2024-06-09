'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useCookies } from 'react-cookie'
import { useContext } from 'react'
import { AuthContext } from '@/contexts'
import Cookies from 'universal-cookie'

// const cookies = new Cookies()
// const token = cookies.get('auth-token')

axios.defaults.baseURL = process.env.SERVER_URL
// axios.defaults.headers.common['Authorization'] = token;

interface FormValues {
    email: String,
    password: String
}

const initialValues: FormValues = {
    email: '',
    password: ''
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password can not be empty')
})

export default function Login() {
    const searchParams = useSearchParams()
    const [registered, setRegistered] = useState(false)
    const router = useRouter()
    // const [setCookie] = useCookies(['user-email'])
    const { setAuthToken } = useContext(AuthContext)

    useEffect(() => {
        let registered = searchParams.get('registered') === 'true' ? true : false
        setRegistered(registered)
    }, [])
    
    const handleLogin = async (values: FormValues, {setSubmitting}) => {
        setSubmitting(false)
        try {
            const { data } = await axios.post('signin', values)
            console.log(data)
            const { done, msg, token } = data
            if(done){
                const cookies = new Cookies()
                cookies.set('auth-token', token, { path: '/' })
                setAuthToken(token)
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

            <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ handleLogin }>
                {({ isSubmitting }) => (
                    <Form className="w-50 mx-auto border rounded p-5 shadow-sm">
                        <h3 className="text-center">Login</h3>
                        <div className="form-row mt-5">
                            <Field type="text" className="form-control p-3" name='email' placeholder='Your email' />
                            <ErrorMessage name='email' component='small' className='text-danger' />
                        </div>
                        <div className="form-row mt-4">
                            <Field type="password" className="form-control p-3" name='password' placeholder='Your secret' />
                            <ErrorMessage name='password' component='small' className='text-danger' />
                        </div>
        
                        <div className="form-row mt-4">
                            <button type="submit" className='btn btn-theme p-3 w-100'>Login</button>
                        </div>
                        <div className="form-row mt-3 text-center">
                            <Link href="/register">Create new account</Link>
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer/>
        </div>
    )
}