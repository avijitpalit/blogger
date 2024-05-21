'use client'

import { useEffect, useContext } from 'react'
import Cookies from 'universal-cookie'
import { AuthContext } from '@/contexts'

export default function Auth({ children }) {
    const { setAuthEmail } = useContext(AuthContext)
    useEffect(() => {
        const cookies = new Cookies()
        let authEmail = cookies.get('user-email') ? cookies.get('user-email') : ''
        setAuthEmail(authEmail)
    }, [])

    return (
        <>{ children }</>
    )
}