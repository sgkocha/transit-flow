import React from 'react'
import "./Licenses.css"

const Licenses = () => {
    return (
        <main>
            <div className="licenses-main">
                <div className="licenses-main-caption d-f">
                    <div className="licenses-main-pattern"></div>
                    <div className="licenses-main-above">Licenses</div>
                </div>
                <h2 className="licenses-main-title">All Assets Licenses</h2>
            </div>
            <div className="licenses-info d-f">
                <div className="licenses-info-title">Icon & Graphics</div>
                <div>
                    <p className="licenses-info-desc" style={{ width: "780px" }}>
                        All graphical assets in this template are licensed for personal and commercial use.
                        If you'd like to use a specific asset, please check the license below.
                    </p>
                    <p className="licenses-info-desc" style={{ width: "800px", marginBottom: 0 }}>
                        The iconography used in this Webflow Template are licensed for free personal and commercial use.
                        If you'd like to use any specific Icon, you can check the licenses and download the images for free on phosphoricons.
                    </p>
                    <div className="licenses-info-subtitle"><span>Phosphor Icon:</span> Licenses</div>
                </div>
                <div className="licenses-info-title">Photography</div>
                <div>
                    <p className="licenses-info-desc" style={{ width: "735px", marginBottom: 0 }}>
                        All images used in this Webflow Template are licensed for free personal and commercial use.
                        If you'd like to use any specific image, you can check the licenses and download the images for
                        free on Unsplash, Pexels, Pixabay, Freepik.
                    </p>
                    <div className="licenses-info-subtitle" style={{ marginTop: "34px" }}><span>Pexels:</span> Licenses</div>
                    <p className="licenses-info-desc" style={{ width: "738px", marginTop: "22px", marginBottom: 0 }}>
                        Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11,
                        Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21,
                        Image 22, Image 23, Image 24, Image 25.
                    </p>
                    <div className="licenses-info-subtitle" style={{ marginTop: "34px" }}><span>Unsplash:</span> Licenses</div>
                    <p className="licenses-info-desc" style={{ marginTop: "22px", marginBottom: 0 }}>
                        Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10
                    </p>
                </div>
                <div className="licenses-info-title">Font</div>
                <div>
                    <p className="licenses-info-desc" style={{ marginBottom: 0 }}>
                        TransitFlow template uses free licensed <span>Google Fonts</span>. 
                        Please check <span>Rubik</span> and <span>Krub</span>.
                    </p>
                </div>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default Licenses