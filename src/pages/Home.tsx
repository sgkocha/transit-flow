import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <main>
      <div className="home-main">
        <div className="home-main-caption d-f">
          <div className="home-main-pattern"></div>
          <div className="home-main-above">Logistics & Supply Chain Solutions</div>
        </div>
        <h2 className="home-main-title">Your Gateway <br /> to any Destination in the World</h2>
        <p className="home-main-desc">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum.
          Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.
        </p>
        <button className="home-main-explore">Explore More</button>
      </div>
      <div className="home-services d-f">
        <div className="home-services-heading">
          <div className="home-services-caption d-f">
            <div className="home-services-pattern"></div>
            <div className="home-services-above">What We Do</div>
          </div>
          <h3 className="home-services-title">Safe & Reliable Cargo Solutions</h3>
        </div>
        <div className="home-services-content d-f jc-sb">
          <div className="home-sevices-item d-f">
            <div><img src="images/services1.png" alt="services1" /></div>
            <div style={{ marginLeft: "41.68px" }}><img src="images/divider.png" alt="divider" /></div>
            <div style={{ marginLeft: "25px" }}>
              <div className="services-item-title">Sea Transport Services</div>
              <p className="services-item-desc">
                Following the quality of our service thus having gained trust of our many clients.
              </p>
            </div>
          </div>
          <div className="home-sevices-item d-f">
            <div><img src="images/services2.png" alt="services2" /></div>
            <div style={{ marginLeft: "41.68px" }}><img src="images/divider.png" alt="divider" /></div>
            <div style={{ marginLeft: "25px" }}>
              <div className="services-item-title">Warehousing Services</div>
              <p className="services-item-desc">
                Following the quality of our service thus having gained trust of our many clients.
              </p>
            </div>
          </div>
          <div className="home-sevices-item d-f">
            <div><img src="images/services3.png" alt="services3" /></div>
            <div style={{ marginLeft: "41.68px" }}><img src="images/divider.png" alt="divider" /></div>
            <div style={{ marginLeft: "25px" }}>
              <div className="services-item-title">Air Fright Services</div>
              <p className="services-item-desc">
                Following the quality of our service thus having gained trust of our many clients.
              </p>
            </div>
          </div>
          <div className="home-sevices-item d-f">
            <div><img src="images/services4.png" alt="services4" /></div>
            <div style={{ marginLeft: "41.68px" }}><img src="images/divider.png" alt="divider" /></div>
            <div style={{ marginLeft: "25px" }}>
              <div className="services-item-title">Local Shipping Services</div>
              <p className="services-item-desc">
                Following the quality of our service thus having gained trust of our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about-wr">
        <div><img src="images/home-about.png" alt="home-about" /></div>
        <div className="home-about">
          <div className="home-about-content d-f">
            <div>
              <div className="home-about-caption d-f">
                <div className="home-about-pattern"></div>
                <div className="home-about-above">Why Us</div>
              </div>
              <h3 className="home-about-title">We provide full range global logistics solution</h3>
              <p className="home-about-desc">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                thinking to further the overall value proposition.
              </p>
              <p className="home-about-desc" style={{ marginBottom: "25px" }}>
                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
              <div className="home-about-advantage d-f align-center">
                <div><img src="images/delivery.png" alt="delivery" /></div>
                <div className="about-advantage-title">Delivery on Time</div>
              </div>
              <div className="home-about-advantage d-f align-center" style={{ marginTop: "22px" }}>
                <div><img src="images/optimized.png" alt="optimized" /></div>
                <div className="about-advantage-title">Optimized Travel Cost</div>
              </div>
            </div>
            <div style={{ marginLeft: "77px" }}>
              <div><img src="images/home-about2.png" alt="home-about2" /></div>
              <div style={{ marginTop: "-129px", marginLeft: "-99px" }}><img src="images/home-about3.png" alt="home-about3" /></div>
            </div>
          </div>
          <div className="home-about-counter d-f">
            <div className="about-counter-item d-f align-center">
              <div className="counter-item-num">1294</div>
              <div className="counter-item-pattern"></div>
              <div className="counter-item-title">Delivered Packages</div>
            </div>
            <div className="about-counter-item d-f align-center">
              <div className="counter-item-num">3594</div>
              <div className="counter-item-pattern"></div>
              <div className="counter-item-title">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "770px" }}></div>
      <div className="home-project">
        <h3 className="home-project-title">Transporting Across The World</h3>
        <div className="home-project-box d-f jc-sb">
          <div className="home-project-item">
            <div className="project-item-title">Liquid Transportation</div>
            <div className="project-item-subtitle">Premium Tankers</div>
          </div>
          <div className="home-project-item">
            <div className="project-item-title">Packaging Solutions</div>
            <div className="project-item-subtitle">Warehouse Management</div>
          </div>
          <div className="home-project-item">
            <div className="project-item-title">Contract Logistics</div>
            <div className="project-item-subtitle">Road Transportation</div>
          </div>
          <div className="home-project-item">
            <div className="project-item-title">Warehouse & Distribution</div>
            <div className="project-item-subtitle">Large Warehouse</div>
          </div>
          <div className="home-project-item">
            <div className="project-item-title">Specialized Transport</div>
            <div className="project-item-subtitle">Ocean Transports</div>
          </div>
        </div>
        <button className="home-project-more">More Work</button>
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
      <div className="home-choose-wr">
        <div className="home-choose d-f">
          <div className="home-choose-blue"></div>
          <div className="home-choose-info">
              <div className="home-choose-caption d-f">
                <div className="home-choose-pattern"></div>
                <div className="home-choose-above">Why Choose</div>
              </div>
              <div className="home-choose-title">We create opportunity to reach potential</div>
              <p className="home-choose-desc">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking 
                to further the overall value proposition. 
              </p>
              <div className="home-choose-box d-f">
                <div className="home-choose-item d-f align-center">
                  <div><img src="images/choose-option2.png" alt="choose-option2" /></div>
                  <div className="choose-item-title">Safe Package</div>
                </div>
                <div className="home-choose-item d-f align-center">
                  <div><img src="images/choose-option3.png" alt="choose-option3" /></div>
                  <div className="choose-item-title">Ship Everyware</div>
                </div>
                <div className="home-choose-item d-f align-center">
                  <div><img src="images/choose-option4.png" alt="choose-option4" /></div>
                  <div className="choose-item-title">Global Tracking</div>
                </div>
                <div className="home-choose-item d-f align-center">
                  <div><img src="images/choose-option5.png" alt="choose-option5" /></div>
                  <div className="choose-item-title">24/7 Support</div>
                </div>
                <div className="home-choose-item d-f align-center">
                  <div><img src="images/choose-option6.png" alt="choose-option6" /></div>
                  <div className="choose-item-title">In Time Delivery</div>
                </div>
                <div className="home-choose-item d-f align-center">
                  <div><img src="images/choose-option7.png" alt="choose-option7" /></div>
                  <div className="choose-item-title">Transparant Pricing</div>
                </div>
              </div>
          </div>
        </div>
        <div className="home-choose-moving">
           <div className="choose-moving-content d-f align-center">
                <div><img src="images/choose-option1.png" alt="choose-option1" /></div>
                <div className="choose-moving-title">Moving your products across borders</div>
           </div>
        </div>
      </div>
    </main>
  )
}

export default Home