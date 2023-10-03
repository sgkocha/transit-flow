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
            <p className="home-about-desc" style={{marginBottom: "25px"}}>
              Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            </p>
            <div className="home-about-advantage d-f align-center">
              <div><img src="images/delivery.png" alt="delivery" /></div>
              <div className="about-advantage-title">Delivery on Time</div>
            </div>
            <div className="home-about-advantage d-f align-center" style={{marginTop: "22px"}}>
              <div><img src="images/optimized.png" alt="optimized" /></div>
              <div className="about-advantage-title">Optimized Travel Cost</div>
            </div>
          </div>
          <div style={{marginLeft: "77px"}}>
            <div><img src="images/home-about2.png" alt="home-about2" /></div>
            <div style={{marginTop:"-129px", marginLeft:"-99px"}}><img src="images/home-about3.png" alt="home-about3" /></div>
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
      <div style={{marginTop: "770px"}}></div>
    </main>
  )
}

export default Home