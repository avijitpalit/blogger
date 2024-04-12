import { createContext, useState } from "react"

export const AuthContext = createContext('cc')
export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: (theme) => {} 
})
// export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}