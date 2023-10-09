import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Services from '../../pages/Services'
import Service from '../../pages/Service'

const Main = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='about'
                element={<About />}
            />
            <Route
                path='services'
                element={<Services/>}
            />
            <Route
                path='service'
                element={<Service/>}
            />
        </Routes>
    )
}

export default Main