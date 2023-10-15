import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <div className="nf-main">
                <div className="nf-main-caption d-f">
                    <div className="nf-main-pattern"></div>
                    <div className="nf-main-above">Pricing</div>
                </div>
                <h2 className="nf-main-title">Our Best Price </h2>
            </div>
            <div className="nf-content">
                <h3 className="nf-content-title">4<span>0</span>4</h3>
                <div className="nf-contnent-subtitle">Oops! Page not found.</div>
                <div className="nf-content-desc">Let's get you to where you need to be.</div>
                <Link to="/" className='nf-content-back'>Back to home</Link>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default NotFound