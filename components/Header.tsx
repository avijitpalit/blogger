'use client'

import React, {use, useEffect, useState} from 'react'
import './header.css'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { usePathname } from "next/navigation";
import { useCookies } from 'react-cookie'
import { useContext, createContext } from 'react'
import { AuthContext } from '../contexts'
import Cookies from 'universal-cookie'

export default function Header() {
    const pathname = usePathname()
    const [onTop, setOnTop] = useState(false)
    const { setAuthToken, authToken } = useContext(AuthContext)
    const [authBtn, setAuthBtn] = useState({
        value: 'Sign in / Register',
        link: '/login'
    })
    const cookies = new Cookies()
    const token = cookies.get('auth-token')

    useEffect(() => {
        const handleScroll = () => {
            setOnTop(window.scrollY === 0 ? true : false)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    /* useEffect(() => {
        console.log(authToken);
        
        return setAuthBtn(authToken ? {
            value: 'My Account',
            link: '/my-account'
        } : {
            value: 'Sign in / Register',
            link: '/login'
        })
    }, [authToken]) */

    useEffect(() => {
        // console.log(token);
        // setAuthToken(token)
        setAuthBtn(token ? {
            value: 'My Account',
            link: '/my-account'
        } : {
            value: 'Sign in / Register',
            link: '/login'
        })
    }, [token])

    return (
        <header className={`site-header ${ !onTop ? 'shadow-sm' : '' }`}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
                <div className="container">
                    <Link className="navbar-brand fw-bold" href="/">Simple Blogger</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link py-4 px-3 ${ pathname == '/' ? 'active' : '' }`} aria-current="page" href="/">Home</Link></li>

                            <li className="nav-item"><Link className={`nav-link py-4 px-3 ${ pathname == '/blogs' ? 'active' : '' }`} aria-current="page" href="/blogs">Blogs</Link></li>

                            <li className="nav-item"><Link className={`nav-link py-4 px-3 ${ pathname == '/admin' ? 'active' : '' }`} href="/admin">Admin</Link></li>

                            <li className="nav-item"><Link className={`nav-link py-4 px-3 ${ pathname == '/about' ? 'active' : '' }`} href="/about">About</Link></li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-theme btn-theme-outlined" type="submit">Search</button>
                        </form>
                        <Link className="auth btn btn-theme ms-2" href={ authBtn.link }><FontAwesomeIcon className='me-1' icon={ faUser } /> { authBtn.value }</Link>
                    </div>
                </div>
            </nav>
        </header>
  )
}