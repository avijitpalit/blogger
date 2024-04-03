'use client'

import React from 'react'
import './header.css'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { usePathname } from "next/navigation";

export default function Header() {
    // const router = useRouter()
    const pathname = usePathname()

    return (
        <header className='site-header'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
                <div className="container">
                    <Link className="navbar-brand fw-bold" href="/">Simple Blogger</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link py-4 px-3 ${ pathname == '/' ? 'active' : '' }`} aria-current="page" href="/">Home</Link></li>
                            <li className="nav-item"><Link className={`nav-link py-4 px-3 ${ pathname == '/about' ? 'active' : '' }`} href="/about">About</Link></li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-theme btn-theme-outlined" type="submit">Search</button>
                        </form>
                        <Link className="auth btn btn-theme ms-2" href="/login"><FontAwesomeIcon className='me-1' icon={ faUser } /> Sign in / Register</Link>
                    </div>
                </div>
            </nav>
        </header>
  )
}