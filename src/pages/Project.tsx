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
        </main>
    )
}

export default Project