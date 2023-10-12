import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Services from '../../pages/Services'
import Service from '../../pages/Service'
import Projects from '../../pages/Projects'
import Project from '../../pages/Project'
import Blog from '../../pages/Blog'
import SingleBlog from '../../pages/SingleBlog'

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
                element={<Services />}
            />
            <Route
                path='service'
                element={<Service />}
            />
            <Route
                path='projects'
                element={<Projects />}
            />
            <Route
                path='project'
                element={<Project />}
            />
            <Route
                path='blog'
                element={<Blog />}
            />
            <Route
                path='single-blog'
                element={<SingleBlog/>}
            />
        </Routes>
    )
}

export default Main