import React from 'react'
import './ChangeLog.css'

const ChangeLog = () => {
    return (
        <main>
            <div className="change-main">
                <div className="change-main-caption d-f">
                    <div className="change-main-pattern"></div>
                    <div className="change-main-above">Updates</div>
                </div>
                <h2 className="change-main-title">Change Log</h2>
            </div>
            <div className="change-newsletter d-f align-center">
                <div className="change-newsletter-title">Version 01</div>
                <div className="change-newsletter-desc">Initial TransitFlow Webflow Template Release</div>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default ChangeLog