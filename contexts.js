'use client'

import { createContext, useState } from "react"

export const AuthContext = createContext({
    authToken: '',
    setAuthToken: (token) => {}
})

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState('')

    return(
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
            { children }
        </AuthContext.Provider>
    )
}