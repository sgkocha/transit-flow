import React from 'react'
import "./Footer.css"

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
      </div>
    </footer>
  )
}

export default Footer