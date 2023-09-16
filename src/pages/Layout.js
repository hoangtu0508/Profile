import React from 'react'
import Nav from '../component/Header/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'
import Intro from '../component/Header/Intro'

const Layout = () => {
    return (
        <div className='bg-bg pt-6'>
            <Nav />
            <Intro />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout