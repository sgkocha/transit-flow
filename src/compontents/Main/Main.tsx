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
import Team from '../../pages/Team'
import Contact from '../../pages/Contact'
import Pricing from '../../pages/Pricing'
import NotFound from '../../pages/NotFound'
import ChangeLog from '../../pages/ChangeLog'
import Licenses from '../../pages/Licenses'
import Protection from '../../pages/Protection'
import StyleGuide from '../../pages/StyleGuide'

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
                element={<SingleBlog />}
            />
            <Route
                path='team'
                element={<Team />}
            />
            <Route
                path='contact'
                element={<Contact />}
            />
            <Route
                path='pricing'
                element={<Pricing />}
            />
            <Route
                path='not-found'
                element={<NotFound />}
            />
            <Route
                path='change-log'
                element={<ChangeLog/>}
            />
            <Route
                path='licenses'
                element={<Licenses/>}
            />
            <Route
                path='protection'
                element={<Protection/>}
            />
            <Route
                path='style-guide'
                element={<StyleGuide/>}
            />
        </Routes>
    )
}

export default Main