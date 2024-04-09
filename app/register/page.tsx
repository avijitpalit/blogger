'use client'

import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { redirect, useRouter } from 'next/navigation'

interface FormValues {
    fname: string,
    lname: string,
    email: string,
    password: string,
    confirmPassword: string
}

const initialValues: FormValues = {
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const validationSchema = Yup.object().shape({
    fname: Yup.string().required('Firstname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password can not be empty').min(6, 'Password must be atleast 6 characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default function Page() {
    const router = useRouter()

    const onCreateAccount = (values, {setSubmitting}) => {
        //console.log(values)
        setSubmitting(false)

        axios.post(`http://localhost:3002/signup`, values)
        .then(res => {
            console.log(res);
            console.log('Redirect to login page');
            // Redirect to login page
            router.push('/login?registered=true')
        })
        .catch(error => console.error('Error', error))
    }

    return (
        <div className="container my-5">
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onCreateAccount}
            >
            {({ isSubmitting }) => (
                <Form className="w-50 mx-auto border rounded p-5 shadow-sm">
                <h3 className="text-center">Register</h3>
                <div className="form-row mt-5 d-flex gap-3">
                    <div>
                        <Field type="text" className="form-control p-3" name='fname' placeholder='Firstname' />
                        <ErrorMessage name="fname" component="small" className='text-danger' />
                    </div>
                    <div>
                        <Field type="text" className="form-control p-3" name='lname' placeholder='Lastname' />
                        <ErrorMessage name="lname" component="small" className='text-danger' />
                    </div>
                </div>
                <div className="form-row mt-4">
                    <Field type="email" className="form-control p-3" name='email' placeholder='Your email' />
                    <ErrorMessage name="email" component="small" className='text-danger' />
                </div>
                <div className="form-row mt-4">
                    <Field type="password" className="form-control p-3" name='password' placeholder='Create password' />
                    <ErrorMessage name="password" component="small" className='text-danger' />
                </div>
                <div className="form-row mt-4">
                    <Field type="password" className="form-control p-3" name='confirmPassword' placeholder='Confirm password' required />
                    <ErrorMessage name="confirmPassword" component="small" className='text-danger' />
                </div>

                <div className="form-row mt-4">
                    <button type="submit" className='btn btn-theme p-3 w-100'>Create new account</button>
                </div>
                
                <div className="form-row mt-3 text-center">
                    <span>Already have account? <Link href="/login">Login</Link></span>
                </div>
                </Form>
            )}
            </Formik>
        </div>
    )
}