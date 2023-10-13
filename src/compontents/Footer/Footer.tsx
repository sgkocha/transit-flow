import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-bar d-f">
        <div className="footer-heading"></div>
        <div className='footer-info'>
          <div><img src="images/logo.png" alt="logo" /></div>
          <p className="footer-desc">
            Leverage agile frameworks to provide a robust synopsis for strategy  collaborative
            thinking to further the overall value proposition.
          </p>
          <div className="footer-contact">
            <div className="footer-contact-bl d-f align-center">
              <div><img src="images/email.png" alt="email" /></div>
              <div className="contact-bl-title">Email <br /> contact@logistics.com</div>
            </div>
            <div className="footer-contact-bl d-f align-center">
              <div><img src="images/phone.png" alt="phone" /></div>
              <div className="contact-bl-title">Call Us <br /> (00) 112 365 489</div>
            </div>
          </div>
        </div>
        <div className='footer-bl' style={{marginLeft: "63px"}}>
          <div className="footer-bl-title">Pages</div>
          <ul className='footer-bl-list'>
            <li><Link to="about">About Us</Link></li>
            <li><Link to="team">Our Team</Link></li>
            <li><Link to="projects">Our Projects</Link></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className='footer-bl'>
          <div className="footer-bl-title">Utility</div>
          <ul className='footer-bl-list'>
            <li><a href="">Style Guide</a></li>
            <li><a href="">Changelog</a></li>
            <li><a href="">Our Project</a></li>
            <li><a href="">Licenses</a></li>
            <li><a href="">Protected</a></li>
            <li><a href="">Not Found</a></li>
          </ul>
        </div>
        <div className='footer-bl'>
          <div className="footer-bl-title">Subscribe</div>
          <form action="" className="footer-bl-fm">
            <input type="email" name='email' placeholder='Email here*' required  />
            <div className="send-bl d-f align-center">
              <button>Send Now</button>
              <div className="footer-bl-social d-f">
                <div><img src="images/footer-social1.png" alt="footer-social1" /></div>
                <div><img src="images/footer-social2.png" alt="footer-social2" /></div>
                <div><img src="images/footer-social3.png" alt="footer-social3" /></div>
              </div>
            </div>
          </form>   
        </div>
        <div className="footer-heading" style={{width: "587px"}}></div>
      </div>
      <div className="footer-copy d-f jc-sb">
        <div className="footer-rights">Copyright &copy; TransitFlow | Designed by VictorFlow - Powered by Webflow.</div>
        <ul className="footer-links d-f">
            <li><a href="">Style Guide</a></li>
            <li><a href="">Licenses</a></li>
            <li><a href="">Changelog</a></li>
            <li><a href="">Password</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer