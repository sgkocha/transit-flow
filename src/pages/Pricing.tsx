import React from 'react'
import './Pricing.css'

const Pricing = () => {
    return (
        <main>
            <div className="pricing-main">
                <div className="pricing-main-caption d-f">
                    <div className="pricing-main-pattern"></div>
                    <div className="pricing-main-above">Pricing</div>
                </div>
                <h2 className="pricing-main-title">Our Best Price </h2>
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
            <div className="home-testimonial"
                style={{marginTop: "88px", marginLeft: 0, marginRight: 0, padding: "98px 359px", backgroundColor: "#F4F4F4" }}>
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
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default Pricing