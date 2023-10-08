import React from 'react'
import './About.css'

const About = () => {
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
            <div className="about-main">
                <div className="about-main-caption d-f">
                    <div className="about-main-pattern"></div>
                    <div className="about-main-above">About Us</div>
                </div>
                <h2 className="about-main-title">About Our Logistics</h2>
            </div>
            <div className="about-company d-f align-center">
                <div><img src="images/company.png" alt="company" /></div>
                <div>
                    <div className="about-company-caption d-f">
                        <div className="about-company-pattern"></div>
                        <div className="about-company-above">About Us</div>
                    </div>
                    <h3 className="about-company-title">Our Company Overview</h3>
                    <p className="about-company-desc">
                        Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking
                        to further the overall value proposition.
                    </p>
                    <div className="about-company-tabs">
                        <div className="company-tabs-controls d-f">
                            <button className='company-tabs-btn tabs-btn__active'>Our Approch</button>
                            <button className='company-tabs-btn'>Our Approch</button>
                            <button className='company-tabs-btn'>Our Approch</button>
                        </div>
                        <p className="company-tabs-content">
                            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
                        </p>
                    </div>
                    <button className='about-company-more'>Learn More</button>
                </div>
            </div>
            <div className="about-services">
                <div className="about-services-caption d-f">
                    <div className="about-services-pattern"></div>
                    <div className="about-services-above">What We Do</div>
                </div>
                <h3 className="about-services-title">Our Logistics Services</h3>
                <div className="about-services-box d-f">
                    <div className="about-services-item">
                        <div><img src="images/service1.png" alt="service1" /></div>
                        <div className="services-item-title">Sea Transport Services</div>
                        <p className="services-item-desc">
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                    <div className="about-services-item">
                        <div><img src="images/service2.png" alt="service2" /></div>
                        <div className="services-item-title">Warehousing Services</div>
                        <p className="services-item-desc">
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                    <div className="about-services-item">
                        <div><img src="images/service3.png" alt="service3" /></div>
                        <div className="services-item-title">Air Fright Services</div>
                        <p className="services-item-desc">
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                    <div className="about-services-item">
                        <div><img src="images/service4.png" alt="service4" /></div>
                        <div className="services-item-title">Project & Exhibition</div>
                        <p className="services-item-desc">
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                    <div className="about-services-item">
                        <div><img src="images/service5.png" alt="service5" /></div>
                        <div className="services-item-title">Local Shipping Services</div>
                        <p className="services-item-desc">
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                    <div className="about-services-item">
                        <div><img src="images/service6.png" alt="service6" /></div>
                        <div className="services-item-title">Customer Clearance</div>
                        <p className="services-item-desc">
                            Following the quality of our service thus having gained trust of our many clients.
                        </p>
                    </div>
                </div>
                <button className='about-services-more'>More Works</button>
            </div>
            <div className="home-team">
                <div className="home-team-caption d-f">
                    <div className="home-team-pattern"></div>
                    <div className="home-team-above">The Transporters</div>
                </div>
                <h3 className="home-team-title">Meet Expert Team</h3>
                <div className="home-team-box d-f jc-sb">
                    <div className="home-team-member">
                        <div><img src="images/team-member1.png" alt="team-member1" /></div>
                        <div className="team-member-info">
                            <div className="team-member-name">Jessca Arow</div>
                            <div className="team-member-pos">Designer</div>
                        </div>
                        <div className="team-social d-f">
                            <div><img src="images/team-social2.png" alt="team-social2" /></div>
                            <div><img src="images/team-social3.png" alt="team-social3" /></div>
                            <div><img src="images/team-social4.png" alt="team-social4" /></div>
                        </div>
                    </div>
                    <div className="home-team-member">
                        <div><img src="images/team-member2.png" alt="team-member2" /></div>
                        <div className="team-member-info">
                            <div className="team-member-name">Kathleen Smith</div>
                            <div className="team-member-pos">Designer</div>
                        </div>
                        <div className="team-social d-f">
                            <div><img src="images/team-social1.png" alt="team-social1" /></div>
                            <div><img src="images/team-social2.png" alt="team-social2" /></div>
                            <div><img src="images/team-social3.png" alt="team-social3" /></div>
                            <div><img src="images/team-social4.png" alt="team-social4" /></div>
                        </div>
                    </div>
                    <div className="home-team-member">
                        <div><img src="images/team-member3.png" alt="team-member3" /></div>
                        <div className="team-member-info">
                            <div className="team-member-name">Rebecca Tylor</div>
                            <div className="team-member-pos">Designer</div>
                        </div>
                        <div className="team-social d-f">
                            <div><img src="images/team-social3.png" alt="team-social3" /></div>
                            <div><img src="images/team-social4.png" alt="team-social4" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-testimonial">
                <div className="home-testimonial-caption d-f">
                    <div className="home-testimonial-pattern"></div>
                    <div className="home-testimonial-above">Testimonial</div>
                </div>
                <div className='d-f jc-sb' style={{ marginTop: "16px" }}>
                    <h3 className="home-testimonial-title">What Our Customer Say</h3>
                    <div className="home-testimonial-controls d-f">
                        <button><img src="images/arrow-left.png" alt="arrow-left" /></button>
                        <button><img src="images/arrow-right.png" alt="arrow-right" /></button>
                    </div>
                </div>
                <div className="home-testimonial-box d-f">
                    <div className="home-testimonial-item">
                        <div className="d-f jc-sb  align-center">
                            <div className="home-testimonial-customer d-f align-center">
                                <div><img src="images/customer1.png" alt="customer" /></div>
                                <div>
                                    <div className="testimonial-customer-name">Kathleen Smith</div>
                                    <div className="testimonial-customer-pos">Fuel Company</div>
                                </div>
                            </div>
                            <div><img src="images/quote.png" alt="quote" /></div>
                        </div>
                        <p className="testimonial-item-desc">
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                            thinking to further the overall value proposition. Organically grow the holistic world
                            view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                        <div className="testimonial-item-rating d-f">
                            <div><img src="images/star.png" alt="star" /></div>
                            <div><img src="images/star.png" alt="star" /></div>
                            <div><img src="images/star.png" alt="star" /></div>
                            <div><img src="images/star.png" alt="star" /></div>
                            <div><img src="images/star.png" alt="star" /></div>
                        </div>
                    </div>
                    <div className="home-testimonial-item">
                        <div className="d-f jc-sb  align-center">
                            <div className="home-testimonial-customer d-f align-center">
                                <div><img src="images/customer2.png" alt="customer" /></div>
                                <div>
                                    <div className="testimonial-customer-name">John Martin</div>
                                    <div className="testimonial-customer-pos">Restoration Company</div>
                                </div>
                            </div>
                            <div><img src="images/quote.png" alt="quote" /></div>
                        </div>
                        <p className="testimonial-item-desc">
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                            thinking to further the overall value proposition. Organically grow the holistic world
                            view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                        <div className="testimonial-item-rating d-f">
                            <div><img src="images/star.png" alt="star" /></div>
                            <div><img src="images/star.png" alt="star" /></div>
                            <div><img src="images/star.png" alt="star" /></div>
                            <div><img src="images/star.png" alt="star" /></div>
                            <div><img src="images/star.png" alt="star" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-pricing">
                <div className="about-pricing-caption d-f">
                    <div className="about-pricing-pattern"></div>
                    <div className="about-pricing-above">Pricing</div>
                </div>
                <h3 className="about-pricing-title">Our Best Pricing</h3>
                <div className="about-pricing-box d-f jc-sb">
                    <div className="about-pricing-item">
                        <div className="pricing-item-title">Basic</div>
                        <div className="pricing-item-price">$39<span> / month</span></div>
                        <ul className="pricing-item-features">
                            <li>Single Truck</li>
                            <li>Full Insurance</li>
                            <li>500 Km</li>
                            <li>Real-time rate shopping</li>
                        </ul>
                        <button className='pricing-item-choose'>Choose Plan</button>
                    </div>
                    <div className="about-pricing-item pricing-item__active">
                        <div className="pricing-item-title">Standart</div>
                        <div className="pricing-item-price">$59<span> / month</span></div>
                        <ul className="pricing-item-features">
                            <li>Single Truck</li>
                            <li>Full Insurance</li>
                            <li>500 Km</li>
                            <li>Real-time rate shopping</li>
                        </ul>
                        <button className='pricing-item-choose'>Choose Plan</button>
                    </div>
                    <div className="about-pricing-item">
                        <div className="pricing-item-title">Premium</div>
                        <div className="pricing-item-price">$89<span> / month</span></div>
                        <ul className="pricing-item-features">
                            <li>Double Truck</li>
                            <li>Full Insurance</li>
                            <li>Unlimitted</li>
                            <li>Real-time rate shopping</li>
                        </ul>
                        <button className='pricing-item-choose'>Choose Plan</button>
                    </div>
                </div>
            </div>
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
            <div style={{ marginBottom: "20px" }}></div>
        </main>
    )
}

export default About