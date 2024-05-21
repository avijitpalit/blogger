'use client'

import { createContext, useState } from "react"

export const AuthContext = createContext({
    authEmail: '',
    setAuthEmail: (email) => {}
})

export const AuthProvider = ({ children }) => {
    const [authEmail, setAuthEmail] = useState('')

    return(
        <AuthContext.Provider value={{ authEmail, setAuthEmail }}>
            { children }
        </AuthContext.Provider>
    )
}