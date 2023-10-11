import React from 'react'
import './Project.css'

const Project = () => {
    return (
        <main>
            <div className="project-main">
                <div className="project-main-caption d-f">
                    <div className="project-main-pattern"></div>
                    <div className="project-main-above">Warehouse Transportation</div>
                </div>
                <h2 className="project-main-title">Air Cargo Transportation</h2>
            </div>
            <div className="project-details d-f jc-sb align-center">
                <div><img src="images/project-details.png" alt="project-details" /></div>
                <div>
                    <h3 className="project-details-title">Project Details</h3>
                    <div className="project-details-content d-f">
                        <div className="details-content-bl d-f align-center">
                            <div className="content-bl-cat">Customer</div>
                            <div>:</div>
                            <div className="content-bl-title">David Warner</div>
                        </div>
                        <div className="details-content-bl d-f align-center">
                            <div className="content-bl-cat">Category</div>
                            <div>:</div>
                            <div className="content-bl-title">Warehouse Transportaion</div>
                        </div>
                        <div className="details-content-bl d-f align-center">
                            <div className="content-bl-cat">Date</div>
                            <div>:</div>
                            <div className="content-bl-title">12 December, 2022</div>
                        </div>
                        <div className="details-content-bl d-f align-center">
                            <div className="content-bl-cat">Status</div>
                            <div>:</div>
                            <div className="content-bl-title">Completed</div>
                        </div>
                        <div className="details-content-bl d-f align-center">
                            <div className="content-bl-cat">Tags</div>
                            <div>:</div>
                            <div className="content-bl-title">Life Style Travel, Best Delivery</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-transportation">
                <h3 className="project-transportation-title">Wharehouse Transportation</h3>
                <p className="project-transportation-desc">
                    Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor.
                    Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc.
                    Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                    Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus
                    sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum.
                    Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.
                </p>
                <ul className="project-transportation-list d-f">
                    <li>National Customer Service Center - 24 hours a day.</li>
                    <li>Online shipping navigator lets you quote, book, and track shipments</li>
                    <li>Your Logistics Needs Are At The Heart Of Our Business</li>
                    <li>Very careful handling of valuable goods</li>
                    <li>Time saving and convenient transportation services in your area</li>
                </ul>
            </div>
            <div className="project-video">
                <h3 className="project-video-title">Our Project Transportation</h3>
                <p className="project-video-desc">
                    Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus libero vel porttitor. 
                    Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id nunc. 
                    Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. 
                    Fusce lectus ex, pretium efficitur suscipit sed, faucibus vel elit Integer adipiscing erat eget risus 
                    sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan ipsum. Pellentesque ultrices 
                    ultrices sapien, nec tincidunt nunc posuere.
                </p>
                <div className="project-video-content"><img src="images/project-video.png" alt="project-video" /></div>
            </div>
            <div className="project-related">
                <h3 className="project-related-title">Related Project</h3>
                <div className="project-related-box d-f jc-sb">
                    <div className="project-related-item">
                        <img src="images/related1.png" alt="related1" />
                        <div className="related-item-hover d-n"><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></div>
                    </div>
                    <div className="project-related-item">
                        <img src="images/related2.png" alt="related2" />
                        <div className="related-item-hover d-n"><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></div>
                    </div>
                    <div className="project-related-item">
                        <img src="images/related3.png" alt="related3" />
                        <div className="related-item-hover d-n"><img src="images/gallery-item-hover.png" alt="gallery-item-hover" /></div>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default Project