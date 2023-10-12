import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
    return (
        <main>
            <div className="blog-main">
                <div className="blog-main-caption d-f">
                    <div className="blog-main-pattern"></div>
                    <div className="blog-main-above">Blog</div>
                </div>
                <h2 className="blog-main-title">Our Latest News</h2>
            </div>
            <div className="blog-our">
                <div className="blog-our-caption d-f">
                    <div className="blog-our-pattern"></div>
                    <div className="blog-our-above"> Our Blog</div>
                </div>
                <h3 className="blog-our-title">Our Latest News</h3>
                <div className="blog-our-content d-f">
                    <div className="blog-our-item d-f">
                        <div className="our-item-img">
                            <img src="images/Blog/blog1.png" alt="blog1" />
                            <div className="item-img-hover d-n">Read More</div>
                        </div>
                        <div className='our-item-calendar'>
                            <div><img src="images/calendar.png" alt="calendar" /></div>
                            <div className="our-item-date">08</div>
                            <div className="our-item-month">March</div>
                        </div>
                        <div className="our-item-info">
                            <div className="our-item-title">Inland freight a worthy solution for your business</div>
                            <p className="our-item-desc">
                                We are dedicated in creating added value for our customers by implementing modern technology in our work.
                            </p>
                            <div className="our-item-list d-f">
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                            </div>
                        </div>
                    </div>
                    <div className="blog-our-item d-f">
                        <div className="our-item-img">
                            <img src="images/Blog/blog2.png" alt="blog2" />
                            <div className="item-img-hover d-n"> <Link to='/single-blog'>Read More</Link></div>
                        </div>
                        <div className='our-item-calendar'>
                            <div><img src="images/calendar.png" alt="calendar" /></div>
                            <div className="our-item-date">12</div>
                            <div className="our-item-month">March</div>
                        </div>
                        <div className="our-item-info">
                            <div className="our-item-title">How technology can help redraw the supply chain map</div>
                            <p className="our-item-desc">
                                We are dedicated in creating added value for our customers by implementing modern technology in our work.
                            </p>
                            <div className="our-item-list d-f">
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                            </div>
                        </div>
                    </div>
                    <div className="blog-our-item d-f">
                        <div className="our-item-img">
                            <img src="images/Blog/blog3.png" alt="blog3" />
                            <div className="item-img-hover d-n">Read More</div>
                        </div>
                        <div className='our-item-calendar'>
                            <div><img src="images/calendar.png" alt="calendar" /></div>
                            <div className="our-item-date">25</div>
                            <div className="our-item-month">March</div>
                        </div>
                        <div className="our-item-info">
                            <div className="our-item-title">Five things you should have ready for your broker</div>
                            <p className="our-item-desc">
                                We are dedicated in creating added value for our customers by implementing modern technology in our work.
                            </p>
                            <div className="our-item-list d-f">
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                            </div>
                        </div>
                    </div>
                    <div className="blog-our-item d-f">
                        <div className="our-item-img">
                            <img src="images/Blog/blog4.png" alt="blog4" />
                            <div className="item-img-hover d-n">Read More</div>
                        </div>
                        <div className='our-item-calendar'>
                            <div><img src="images/calendar.png" alt="calendar" /></div>
                            <div className="our-item-date">28</div>
                            <div className="our-item-month">March</div>
                        </div>
                        <div className="our-item-info">
                            <div className="our-item-title">Four simple tips for becoming a healthier truck driver</div>
                            <p className="our-item-desc">
                                We are dedicated in creating added value for our customers by implementing modern technology in our work.
                            </p>
                            <div className="our-item-list d-f">
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                            </div>
                        </div>
                    </div>
                    <div className="blog-our-item d-f">
                        <div className="our-item-img">
                            <img src="images/Blog/blog5.png" alt="blog5" />
                            <div className="item-img-hover d-n">Read More</div>
                        </div>
                        <div className='our-item-calendar'>
                            <div><img src="images/calendar.png" alt="calendar" /></div>
                            <div className="our-item-date">30</div>
                            <div className="our-item-month">March</div>
                        </div>
                        <div className="our-item-info">
                            <div className="our-item-title">What Is The Role Of A Logistics Operations Manager</div>
                            <p className="our-item-desc">
                                We are dedicated in creating added value for our customers by implementing modern technology in our work.
                            </p>
                            <div className="our-item-list d-f">
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                                <li>Urgent transport solutions</li>
                                <li>Reliable & experienced staffs</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default Blog