import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <main>
            <div className="contact-main">
                <div className="contact-main-caption d-f">
                    <div className="contact-main-pattern"></div>
                    <div className="contact-main-above">Contact</div>
                </div>
                <h2 className="contact-main-title">Contact Us</h2>
            </div>
            <div className="contact-touch">
                <div className="contact-touch-caption d-f">
                    <div className="contact-touch-pattern"></div>
                    <div className="contact-touch-above">Contact</div>
                </div>
                <h3 className="contact-touch-title">Get in touch with us</h3>
                <p className="contact-touch-desc">
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative 
                    thinking to further the overall value.
                </p>
                <div className="contact-touch-info d-f">
                    <div className='touch-info-item'>
                        <div><img src="images/touch-info1.png" alt="touch-info1" /></div>
                        <div className="touch-info-title">contact@logistics.com</div>
                    </div>
                    <div className='touch-info-item'>
                        <div><img src="images/touch-info2.png" alt="touch-info2" /></div>
                        <div className="touch-info-title"> (00) 112 365 489</div>
                    </div>
                    <div className='touch-info-item'>
                        <div><img src="images/touch-info3.png" alt="touch-info3" /></div>
                        <div className="touch-info-title"> Mon - Sat 9.00 - 18.00 <br /> Sunday Closed</div>
                    </div>
                </div>
                <form action="" className='contact-touch-fm d-f'>
                    <div className="input-bl d-f">
                        <input type="text" name='fname' placeholder='Your name*' required />
                        <input type="email" name="email" placeholder='Email*' required />
                    </div>
                    <div className="input-bl d-f">
                        <input type="tel" name="phone" placeholder='Phone Number*' required />
                        <input type="text" name='city' placeholder='City*' required />
                    </div>
                    <textarea name="message" placeholder=''>Your Message</textarea>
                    <button>Submit Message</button>
                </form>
            </div>
            <div className="contact-clients"><img src="images/clients-logo.png" alt="clients-logo" /></div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default Contact