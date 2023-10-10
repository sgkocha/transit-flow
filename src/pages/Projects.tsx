import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
  return (
    <main>
      <div className="projects-main">
        <div className="projects-main-caption d-f">
          <div className="projects-main-pattern"></div>
          <div className="projects-main-above">Gallery</div>
        </div>
        <h3 className="projects-main-title">Our Project</h3>
      </div>
      <div className="projects-gallery d-f jc-sb">
        <div className='projects-gallery-item'>
          <img src="images/projects1.png" alt="projects1" />
          <div className="gallery-item-hover d-n">
             <Link to='/project'><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></Link>  
          </div>
        </div>
        <div className='projects-gallery-item'>
          <img src="images/projects2.png" alt="projects2" />
          <div className="gallery-item-hover d-n"><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></div>
        </div>
        <div className='projects-gallery-item'>
          <img src="images/projects3.png" alt="projects3" />
          <div className="gallery-item-hover d-n"><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></div>
        </div>
        <div className='projects-gallery-item'>
          <img src="images/projects4.png" alt="projects4" />
          <div className="gallery-item-hover d-n"><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></div>
        </div>
        <div className='projects-gallery-item'>
          <img src="images/projects5.png" alt="projects5" />
          <div className="gallery-item-hover d-n"><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></div>
        </div>
        <div className='projects-gallery-item'>
          <img src="images/projects6.png" alt="projects6" />
          <div className="gallery-item-hover d-n"><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></div>
        </div>
      </div>
      <div className="services-counter d-f" style={{marginTop: "100px"}}>
                <div className="services-counter-item d-f align-center">
                    <div className="counter-item-num">24</div>
                    <div className="counter-item-pattern"></div>
                    <div className="counter-item-title">Our Location</div>
                </div>
                <div className="services-counter-item d-f align-center">
                    <div className="counter-item-num">1294</div>
                    <div className="counter-item-pattern"></div>
                    <div className="counter-item-title">Delivered Packages</div>
                </div>
                <div className="services-counter-item d-f align-center">
                    <div className="counter-item-num">3594</div>
                    <div className="counter-item-pattern"></div>
                    <div className="counter-item-title">Satisfied Clients</div>
                </div>
                <div className="services-counter-item d-f align-center">
                    <div className="counter-item-num">247+</div>
                    <div className="counter-item-pattern"></div>
                    <div className="counter-item-title">Owned Vehicles</div>
                </div>
            </div>
      <div style={{ marginBottom: "6px" }}></div>
    </main>
  )
}

export default Projects