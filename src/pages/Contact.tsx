import React from 'react'
import './Contact.css'

const Contact = () => {
    const [questionOne, setQuestonOne] = React.useState(true)
    const [questionTwo, setQuestonTwo] = React.useState(false)
    const [questionThree, setQuestonThree] = React.useState(false)
    const [questionFour, setQuestonFour] = React.useState(false)

    const handleQuestionOne = () => {
        setQuestonOne((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleQuestionTwo = () => {
        setQuestonTwo((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleQuestionThree = () => {
        setQuestonThree((prevState) => {
            return (
                !prevState
            )
        })
    }

    const handleQuestionFour = () => {
        setQuestonFour((prevState) => {
            return (
                !prevState
            )
        })
    }

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
            <div className="about-faq-wr ">
                <div className="about-faq d-f jc-sb">
                    <div>
                        <div className="about-faq-caption d-f">
                            <div className="about-faq-pattern"></div>
                            <div className="about-faq-above">FAQ</div>
                        </div>
                        <h3 className="about-faq-title">Frequently Asked Questions</h3>
                        <div className="about-faq-box d-f">
                            <div>
                                <div className="d-f jc-sb">
                                    <div className="faq-question">How can I pay for your logistics services?</div>
                                    <button
                                        className='faq-question-btn'
                                        onClick={handleQuestionOne}
                                    >
                                        <img src={questionOne ? "images/arrow-down2.png" : "images/arrow-left2.png"} alt="arrow" />
                                    </button>
                                </div>
                                <p className={questionOne ? "faq-content" : "d-n" }>
                                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                                    thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                                </p>
                            </div>
                            <div>
                                <div className="d-f jc-sb">
                                    <div className="faq-question">What payment methods are supported?</div>
                                    <button
                                        className='faq-question-btn'
                                        onClick={handleQuestionTwo}
                                    >
                                        <img src={questionTwo ? "images/arrow-down2.png" : "images/arrow-left2.png"} alt="arrow" />
                                    </button>
                                </div>
                                <p className={questionTwo ? "faq-content" : "d-n" }>
                                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                                    thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                                </p>
                            </div>
                            <div>
                                <div className="d-f jc-sb">
                                    <div className="faq-question">What options for logistics plans are available?</div>
                                    <button
                                        className='faq-question-btn'
                                        onClick={handleQuestionThree}
                                    >
                                        <img src={questionThree ? "images/arrow-down2.png" : "images/arrow-left2.png"} alt="arrow" />
                                    </button>
                                </div>
                                <p className={questionThree ? "faq-content" : "d-n" }>
                                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                                    thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                                </p>
                            </div>
                            <div>
                                <div className="d-f jc-sb">
                                    <div className="faq-question">Can i specify a delivery date when ordering?</div>
                                    <button
                                        className='faq-question-btn'
                                        onClick={handleQuestionFour}
                                    >
                                        <img src={questionFour ? "images/arrow-down2.png" : "images/arrow-left2.png"} alt="arrow" />
                                    </button>
                                </div>
                                <p className={questionFour ? "faq-content" : "d-n" }>
                                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                                    thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div><img src="images/faq-main.png" alt="faq-main" /></div>
                </div>
                <div className="about-faq-contact">
                    <div className="faq-contact-caption d-f">
                        <div className="faq-contact-pattern"></div>
                        <div className="faq-contact-above">Let's Talk</div>
                    </div>
                    <div className="faq-contact-title">You need any help? Get free consultation</div>
                    <div className="faq-contact-bl d-f align-center">
                        <div><img src="images/phone.png" alt="phone" /></div>
                        <div className="contact-bl-title">Have Any Questions <br /> (00) 112 365 489</div>   
                    </div>
                    <button className='faq-contact-btn'>Contact Us</button>
                </div>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default Contact