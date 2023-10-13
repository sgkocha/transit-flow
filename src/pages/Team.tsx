import React from 'react'
import './Team.css'

const Team = () => {
    return (
        <main>
            <div className="team-main">
                <div className="tean-main-caption d-f">
                    <div className="team-main-pattern"></div>
                    <div className="team-main-above">Team</div>
                </div>
                <h2 className="team-main-title">Our Team</h2>
            </div>
            <div className="home-team team-about">
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
                    <div className="home-team-member">
                        <div><img src="images/team-member4.png" alt="team-member4" /></div>
                        <div className="team-member-info">
                            <div className="team-member-name">Ria Jackson</div>
                            <div className="team-member-pos">Operational Head</div>
                        </div>
                        <div className="team-social d-f">
                            <div><img src="images/team-social2.png" alt="team-social2" /></div>
                            <div><img src="images/team-social3.png" alt="team-social3" /></div>
                            <div><img src="images/team-social4.png" alt="team-social4" /></div>
                        </div>
                    </div>
                    <div className="home-team-member">
                        <div><img src="images/team-member5.png" alt="team-member5" /></div>
                        <div className="team-member-info">
                            <div className="team-member-name">Kane William</div>
                            <div className="team-member-pos">Country Head</div>
                        </div>
                        <div className="team-social d-f">
                            <div><img src="images/team-social2.png" alt="team-social2" /></div>
                            <div><img src="images/team-social3.png" alt="team-social3" /></div>
                            <div><img src="images/team-social4.png" alt="team-social4" /></div>
                        </div>
                    </div>
                    <div className="home-team-member">
                        <div><img src="images/team-member6.png" alt="team-member6" /></div>
                        <div className="team-member-info">
                            <div className="team-member-name">Lisara Tylor</div>
                            <div className="team-member-pos">Finance Manager</div>
                        </div>
                        <div className="team-social d-f">
                            <div><img src="images/team-social3.png" alt="team-social3" /></div>
                            <div><img src="images/team-social4.png" alt="team-social4" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-choose d-f jc-sb">
                <div><img src="images/team-choose.png" alt="team-choose" /></div>
                <div>
                    <div className="team-choose-caption d-f">
                        <div className="team-choose-pattern"></div>
                        <div className="team-choose-above">About</div>
                    </div>
                    <h3 className="team-choose-title">Why Choose Us</h3>
                    <p className="team-choose-desc">
                        Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative
                        thinking to further the overall value proposition.
                    </p>
                    <div className="team-choose-content d-f">
                        <div className="choose-content-item">
                            <div><img src="images/team-choose1.png" alt="team-choose1" /></div>
                            <div className="content-item-title">Our Vission</div>
                            <p className="content-item-desc">
                                Leverage agile frameworks to provide a robust synopsis for strategy foster.
                            </p>
                        </div>
                        <div className="choose-content-item">
                            <div><img src="images/team-choose2.png" alt="team-choose2" /></div>
                            <div className="content-item-title">Estimate Shipping</div>
                            <p className="content-item-desc">
                                Leverage agile frameworks to provide a robust synopsis for strategy foster.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-clients"><img src="images/clients-logo.png" alt="clients-logo" /></div>
            <div style={{ marginBottom: "100px" }}></div>
        </main>
    )
}

export default Team