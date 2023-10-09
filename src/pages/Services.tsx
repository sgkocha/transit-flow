import React from 'react'
import "./Services.css"

const Services = () => {
    return (
        <main>
            <div className="services-main">
                <div className="services-main-caption d-f">
                    <div className="services-main-pattern"></div>
                    <div className="services-main-above">Services</div>
                </div>
                <h2 className="services-main-title">Our Logistics Service</h2>
            </div>
            <div className="about-services" style={{ backgroundColor: "#FFFFFF", marginTop: "82px" }}>
                <div className="about-services-caption d-f">
                    <div className="about-services-pattern"></div>
                    <div className="about-services-above">What We Do</div>
                </div>
                <h3 className="about-services-title">Our Logistics Services</h3>
                <div className="about-services-box d-f" style={{ justifyContent: "space-around" }}>
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
            <div className="services-goodness">
                <div className="services-goodness-caption d-f">
                    <div className="services-goodness-pattern"></div>
                    <div className="services-goodness-above">Our Goodness</div>
                </div>
                <h3 className="services-goodness-title">How We Works</h3>
                <div className="services-goodness-box d-f jc-sb align-center">
                    <div><img src="images/goodness.png" alt="goodness" /></div>
                    <div className="services-goodness-content d-f">
                        <div className="goodness-content-bl d-f">
                            <div><img src="images/goodness-service1.png" alt="goodness-service1" /></div>
                            <div>
                                <div className="content-bl-title">Warehousing Services</div>
                                <p className="content-bl-desc">
                                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking
                                </p>
                            </div>
                        </div>
                        <div className="goodness-content-bl d-f">
                            <div><img src="images/goodness-service2.png" alt="goodness-service2" /></div>
                            <div>
                                <div className="content-bl-title">Safety & Quality</div>
                                <p className="content-bl-desc">
                                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking
                                </p>
                            </div>
                        </div>
                        <div className="goodness-content-bl d-f">
                            <div><img src="images/goodness-service3.png" alt="goodness-service3" /></div>
                            <div>
                                <div className="content-bl-title">Care for Environment</div>
                                <p className="content-bl-desc">
                                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking
                                </p>
                            </div>
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
            <div className="services-counter d-f">
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
            <div style={{ marginBottom: "8px" }}></div>
        </main>
    )
}

export default Services