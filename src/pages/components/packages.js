import React from "react";
import AnimatedCard from '../functionalities/AnimatedCard';
import '../styles/packages.css'

const Packages = () => {
    return (
        <div className="packages" id="packages">
            Packages we offer!
            <div className="cards">
                <AnimatedCard>
                    <div className="card">
                        <div className="top">
                            <h5 className="s">Silver</h5>
                            <h5>Price: ₹25,000/-</h5>
                        </div>
                        <div className="mid">
                            <li>Two days of Event Coverage</li>
                            <li>One DSLR + One Video-cam Recorder</li>
                            <li>1.5hrs of video + Digital Album</li>
                            <ul>*Extra travel charges applicable if outside Bhubaneswar</ul>
                        </div>
                        <div className="bottom">
                            <div className="button">Purchase</div>
                        </div>
                    </div>
                </AnimatedCard>
                <AnimatedCard>
                    <div className="card">
                        <div className="top">
                            <h5 className="g">Gold</h5>
                            <h5>Price: ₹40,000/-</h5>
                        </div>
                        <div className="mid">
                            <li>Three days of Event Coverage</li>
                            <li>Canon DSLR + Full HD Video-cam Recorder</li>
                            <li>2 hrs of video + 50 page Photo Album</li>
                            <li>Drone Shooting & 120inch Projector</li>
                            <li>Studio light setup on stage</li>
                        </div>
                        <div className="bottom">
                            <div className="button">Purchase</div>
                        </div>
                    </div>
                </AnimatedCard>
                <AnimatedCard>
                    <div className="card">
                        <div className="top">
                            <h5 className="p">Platinum</h5>
                            <h5>Price: ₹75,000/-</h5>
                        </div>
                        <div className="mid">
                            <li>Four days of Event Coverage + Pre Wedding shoot</li>
                            <li>Canon 5D DSLR + Any other DSLR</li>
                            <li>Panasonic Full HD Video Camera recorder</li>
                            <li>3 hrs of video + 70 page Photo Album</li>
                            <li>4K Drone Shooting & 120inch Projector/4K TV</li>
                            <li>Studio light setup on stage</li>
                        </div>
                        <div className="bottom">
                            <div className="button">Purchase</div>
                        </div>
                    </div>
                </AnimatedCard>
                <AnimatedCard>
                    <div className="card">
                        <div className="top">
                            <h5 className="d">Diamond</h5>
                            <h5>Price: ₹1,00,000/-</h5>
                        </div>
                        <div className="mid">
                            <li>Four days of Event Coverage + Pre Wedding shoot</li>
                            <li>Canon 5D DSLR + Any other DSLR</li>
                            <li>Sony 4K Camera + Panasonic Full HD Video Camera recorder</li>
                            <li>4 hrs of video + 100 page Photo Album</li>
                            <li>4K Drone Shooting & 120inch Projector/4K TV</li>
                            <li>Studio light setup on stage</li>
                            <li>Complete Event Live Telecast</li>
                        </div>
                        <div className="bottom">
                            <div className="button">Purchase</div>
                        </div>
                    </div>
                </AnimatedCard>
            </div>
        </div>
    );
};

export default Packages;
