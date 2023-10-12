import React from 'react'
import './SingleBlog.css'

const SingleBlog = () => {
    return (
        <main>
            <div className="single-main">
                <div className="single-main-calendar d-f align-center">
                    <div><img src="images/calendar2.png" alt="calendar" /></div>
                    <div style={{ textAlign: "center" }}>
                        <div className="single-main-date">12</div>
                        <div className="single-main-month">March</div>
                    </div>
                </div>
                <h2 className="single-main-title">How technology can help redraw the supply chain map</h2>
            </div>
            <div className="single-blog d-f jc-sb">
                <div>
                    <div className="single-blog-bl">
                        <h3 className="single-blog-title">Your Logistics Solutions</h3>
                        <p className="single-blog-desc">
                            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor.
                            Nulla tempor elit nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis justo velit.
                            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]
                        </p>
                        <div className="single-blog-quote">
                            “Digitization within transport and logistics means seamless service to our customers, visibility in the supply chain,
                            and driving a more efficient business.”
                        </div>
                    </div>
                    <div className="single-blog-bl">
                        <h3 className="single-blog-title">Safest Logistics Solutions Provider With Integrity</h3>
                        <p className="single-blog-desc">
                            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor.
                            Nulla tempor elit nec feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc. Morbi quis justo velit.
                            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo Fusce lectus ex pretium[...]
                        </p>
                        <div className="single-blog-img"><img src="images/ship.png" alt="ship" /></div>
                        <h4 className="ship-title">The Cargo Ship</h4>
                        <p className="single-blog-desc" style={{ marginTop: "30px" }}>
                            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus
                            libero vel porttitor. Nulla tempor elit nec attempus.Phasellus at quam hendrerit semper
                            David Warner nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
                            porttitor leo Fusce lectus ex pretium.
                        </p>
                        <p className="single-blog-desc" style={{ marginTop: "20px", fontWeight: 400 }}>
                            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapib libero vel porttitor.
                            Nulla tempor elit nec feugiat tempus Phasellus atquam.
                        </p>
                        <div className="single-blog-info d-f jc-sb">
                            <div className="single-blog-social d-f">
                                <div><img src="images/blog-social1.png" alt="blog-social1" /></div>
                                <div><img src="images/blog-social2.png" alt="blog-social2" /></div>
                                <div><img src="images/blog-social3.png" alt="blog-social3" /></div>
                                <div><img src="images/blog-social4.png" alt="blog-social4" /></div>
                            </div>
                            <div className="single-blog-category">Category : Shipping</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single-blog-categories">
                        <div className="blog-categories-title">Categories</div>
                        <div className="blog-categories-box d-f">
                            <div className="blog-categories-item d-f jc-sb align-center">
                                <div className="categories-item-title">Shipping</div>
                                <div className="categories-item-count">(3)</div>
                            </div>
                            <div className="blog-categories-item d-f jc-sb align-center">
                                <div className="categories-item-title">Services</div>
                                <div className="categories-item-count">(5)</div>
                            </div>
                            <div className="blog-categories-item d-f jc-sb align-center">
                                <div className="categories-item-title">Transport</div>
                                <div className="categories-item-count">(2)</div>
                            </div>
                            <div className="blog-categories-item d-f jc-sb align-center">
                                <div className="categories-item-title">Warehouse</div>
                                <div className="categories-item-count">(2)</div>
                            </div>
                            <div className="blog-categories-item d-f jc-sb align-center">
                                <div className="categories-item-title">Transport Industries</div>
                                <div className="categories-item-count">(5)</div>
                            </div>

                        </div>
                    </div>
                    <div className="single-blog-contact">
                        <div className="blog-contact-title">How can we help you?</div>
                        <p className="blog-contact-desc">
                            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. 
                            Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec 
                            feugiat tempus Phasellus atquam.
                        </p>
                        <button className='blog-contact-btn'>Contact</button>
                    </div>
                    <div className="single-blog-touch">
                        <div className="blog-touch-caption d-f">
                            <div className="blog-touch-pattern"></div>
                            <div className="blog-touch-title">Get In Touch</div>
                        </div>
                        <div className="blog-touch-bl">Need help? <br /> (00) 112 365 489 </div>
                        <div className="blog-touch-bl">Email <br /> contact@logistics.com </div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default SingleBlog