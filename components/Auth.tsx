'use client'

import React, { useEffect, useContext, useState } from 'react'
import Cookies from 'universal-cookie'
import { AuthContext } from '@/contexts'
import axios from 'axios'
import { useRouter } from 'next/navigation'

axios.defaults.baseURL = process.env.SERVER_URL
// axios.defaults.headers.common['Authorization'] = token;

export default function Auth({ children }: { children: React.ReactNode }) {
    //const { setAuthEmail } = useContext(AuthContext)
    const router = useRouter()
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    useEffect(() => {      
        const cookies = new Cookies()
        const token = cookies.get('auth-token')
        axios.get('auth', { headers: {Authorization: token} })
        .then(resp => {
            // console.log(resp)
            setIsUserLoggedIn(true)
        })
        .catch(error => {
            setIsUserLoggedIn(false)
            // console.error(error);
            router.push('/login')
        })
    }, [])

    return (
        <>{ isUserLoggedIn ? children : <></> }</>
    )
}