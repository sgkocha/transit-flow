import React from 'react'
import './Service.css'

const Service = () => {
    return (
        <main>
            <div className="service-main">
                <div className="service-main-caption d-f">
                    <div className="service-main-pattern"></div>
                    <div className="service-main-above">Service Single</div>
                </div>
                <h3 className="service-main-title">Service Details</h3>
            </div>
            <div className="service-info">
                <div><img src="images/service-info.png" alt="service-info" /></div>
                <div className="service-info-caption d-f align-center">
                    <div><img src="images/service1.png" alt="service1" /></div>
                    <h3 className="service-info-title">Sea Transport Services</h3>     
                </div>
                <p className="service-info-desc">
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt,
                        neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi consequatur?
                    </p>
                    <p className="service-info-desc">
                        Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, 
                        vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio 
                        dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et 
                        quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia 
                        deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
            </div>
            <div style={{ marginBottom: "120px" }}></div>
        </main>
    )
}

export default Service