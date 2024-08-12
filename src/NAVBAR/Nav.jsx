import React from 'react'
import { Link, Outlet, } from 'react-router-dom'
import './Nav.css'

export const Layout = () => {

    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                    <li><Link to='/signup'><button className='b1'>Sign up</button></Link></li>
                    <li><Link to='/login'><button className='b1'>Login</button></Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

